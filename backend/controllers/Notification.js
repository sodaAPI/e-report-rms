import Notification from "../models/notificationModel.js";
import User from "../models/userModel.js";
import Task from "../models/taskModel.js";
import Meeting from "../models/meetingModel.js";
import { Op } from "sequelize";
import cron from "node-cron";
import nodemailer from "nodemailer";

export const getNotifications = async (req, res) => {
  try {
    let response;
    response = await Notification.findAll({
      attributes: [
        "id",
        "uuid",
        "notifmsg",
        "taskId",
        "meetingId",
        "userId",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: User,
          attributes: ["name", "username", "email"],
        },
        {
          model: Task,
          attributes: ["name", "status", "deadline", "userId"],
        },
        {
          model: Meeting,
          attributes: [
            "meeting_name",
            "online_meeting_link",
            "meeting_date",
            "userId",
          ],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addNotification = async (req, res) => {
  const { id, uuid, notifmsg, taskId, meetingId } = req.body;
  try {
    await Notification.create({
      id: id,
      uuid: uuid,
      notifmsg: notifmsg,
      taskId: taskId,
      meetingId: meetingId,
      userId: req.userId,
    });
    res.status(201).json({ message: "Notification created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating message", error: error.message });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!notification) return res.status(404).json({ msg: "Data not found" });
    if (req.roles === "admin") {
      await Notification.destroy({
        where: {
          id: notification.id,
        },
      });
    } else {
      if (req.userId !== notification.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Notification.destroy({
        where: {
          [Op.and]: [{ id: notification.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// TODO: FIX PUSH NOTIFICATION FETCH DATA & ADD CRON NODE IN NOTIFICATION ROUTE
export const pushNotification = async (req, res) => {
  const notification = await Notification.findAll({
    attributes: [
      "id",
      "uuid",
      "notifmsg",
      "taskId",
      "meetingId",
      "userId",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: User,
        attributes: ["name", "username", "email"],
      },
      {
        model: Task,
        attributes: ["name", "status", "deadline", "userId"],
      },
      {
        model: Meeting,
        attributes: [
          "meeting_name",
          "online_meeting_link",
          "meeting_date",
          "userId",
        ],
      },
    ],
  });
  res.status(200).json(notification);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    auth: {

    },
  });

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  notification.forEach((notification) => {
    if (notification.userId === req.userId) {
      let message = `
      <h1>Hello ${notification.user?.name},</h1>
      <h2>This is from Bank BTN E-Report Management System</h2>
      `;
      if (notification.meetingId && notification.taskId !== null) {
        message += `
        <h2>You have a Uncomplete Meeting / Task: ${notification.notifmsg}</h2>
        <div>
          <h3>Task Detail: </h3>
          <p><b>Task Name</b>: ${notification.task?.name}</p>
          <p><b>Task Status</b>: ${notification.task?.status}</p>
          <p><b>Task Deadline</b>: ${notification.task?.deadline}</p>
        </div>
        <div>
          <h3>Meeting Detail: </h3>
          <p><b>Meeting Name</b>: ${notification.meeting?.meeting_name}</p>
          <p><b>Meeting Link</b>: ${notification.meeting?.online_meeting_link}</p>
          <p><b>Meeting Date</b>: ${notification.meeting?.meeting_date}</p>
        </div>`;
      }
      if (notification.meetingId === null) {
        message += `
        <div>
        <h2>You have a Uncomplete Task: ${notification.notifmsg}</h2>
          <h3>Task Detail: </h3>
          <p><b>Task Name</b>: ${notification.task?.name}</p>
          <p><b>Task Status</b>: ${notification.task?.status}</p>
          <p><b>Task Deadline</b>: ${notification.task?.deadline}</p>
        </div>`;
      }
      if (notification.taskId === null) {
        message += `
        <div>
        <h2>You have a Upcoming Meeting: ${notification.notifmsg}</h2>
          <h3>Meeting Detail: </h3>
          <p><b>Meeting Name</b>: ${notification.meeting?.meeting_name}</p>
          <p><b>Meeting Link</b>: ${notification.meeting?.online_meeting_link}</p>
          <p><b>Meeting Date</b>: ${notification.meeting?.meeting_date}</p>
        </div>`;
      }

      message += `<h4>Thank you for using our service!</h4>`;

      if (
        formatDate(Date.now()) < notification.meeting?.meeting_date ||
        formatDate(Date.now()) < notification.task?.deadline
      ) {
        transporter
          .sendMail({

            subject: "BTN E-Report Management System - New Notification",
            html: message,
          })
          .then(console.info)
          .catch(console.error);
      } else {
        console.log(`Sorry, Notification (${notification.notifmsg}) is not up to date`);
        console.log(formatDate(Date.now()));
      }
    }
  });
};

  // function formatDate(date) {
  //   var d = new Date(date),
  //     month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   return [year, month, day].join("-");
  // }

  // console.log(formatDate(Date.now()));
  // console.log(emailMessage);

  // const jsonToString = JSON.stringify(emailMessage);

  //Check if Notification is up to date
//   if (
//     Date.now() < notification.meeting?.meeting_date ||
//     notification.task?.deadline
//   ) {
//     cron.schedule(
//       " * ", // Every day of week
//       () => {
//         transporter
//           .sendMail({
//             subject: "BTN E-Report Management System - New Notification",
//             html: emailMessage,
//           })
//           .then(console.info)
//           .catch(console.error);
//       },
//       {
//         scheduled: true,
//         timezone: "Asia/Jakarta",
//       }
//     );
//   } else {
//     console.log("Sorry, Notification is not up to date");
//   }
// };
