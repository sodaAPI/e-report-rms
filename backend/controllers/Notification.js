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

export const getNotificationsByUserId = async (req, res) => {
  try {
    const response = await Notification.findAll({
      where: {
        userId: req.userId,
      },
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

export const addNotificationById = async (req, res) => {
  const { id, uuid, taskId, meetingId } = req.body;
  let notifmsg;
  try {
    const task = await Task.findByPk(taskId);
    const meeting = await Meeting.findByPk(meetingId);
    if (task && meeting) {
      notifmsg = `${task.name} & ${meeting.meeting_name}`;
    } else if (task) {
      notifmsg = task.name;
    } else if (meeting) {
      notifmsg = meeting.meeting_name;
    } else {
      return res.status(404).json({ msg: "task or meeting not found" });
    }
    await Notification.create({
      id: id,
      uuid: uuid,
      notifmsg: notifmsg,
      taskId: taskId,
      meetingId: meetingId,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Notification Created Successfully" });
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
    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating message", error: error.message });
  }
};

export const deleteNotification = async (req, res) => {
  await Notification.destroy({
    where: {
      userId: req.userId,
    },
  });
  res.status(200).json({ message: "Notification deleted successfully" });
};

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
      <tr><td><h1>Hello ${notification.user?.name},</h1></td></tr>
      <tr><td><h2>This is from Bank BTN E-Report Management System</h2></td></tr>
      `;
      if (notification.meetingId && notification.taskId !== null) {
        message += `
        <div>
        <h2 style="font-weight:400"><b>You have a Uncomplete Meeting / Task</b>: ${notification.notifmsg}</h2>
          <tr><td><h3>Task Detail: </h3></td></tr>
          <tr><td><b>Task Name</b>: ${notification.task?.name}</td></tr>
          <tr><td><b>Task Status</b>: ${notification.task?.status}</td></tr>
          <tr><td><b>Task Deadline</b>: ${notification.task?.deadline}</td></tr>
        </div>
        <div>
        <tr><td><h3>Meeting Detail: </h3><td></tr>
          <tr><td><b>Meeting Name</b>: ${notification.meeting?.meeting_name}</td></tr>
          <tr><td><b>Meeting Link</b>: ${notification.meeting?.online_meeting_link}</td></tr>
          <tr<td><b>Meeting Date</b>: ${notification.meeting?.meeting_date}</td></tr>
        </div>`;
      }
      if (notification.meetingId === null) {
        message += `
        <div>
        <h2 style="font-weight:400"><b>You have a Uncomplete Task</b>: ${notification.notifmsg}</h2>
        <tr><td><h3>Task Detail: </h3></td></tr>
        <tr><td><b>Task Name</b>: ${notification.task?.name}</td></tr>
        <tr><td><b>Task Status</b>: ${notification.task?.status}</td></tr>
        <tr><td><b>Task Deadline</b>: ${notification.task?.deadline}</td></tr>
        </div>`;
      }
      if (notification.taskId === null) {
        message += `
        <div>
        <h2 style="font-weight:400"><b>You have a Upcoming Meeting</b>: ${notification.notifmsg}</h2>
        <tr><td><h3>Meeting Detail: </h3><td></tr>
          <tr><td><b>Meeting Name</b>: ${notification.meeting?.meeting_name}</td></tr>
          <tr><td><b>Meeting Link</b>: ${notification.meeting?.online_meeting_link}</td></tr>
          <tr><td><b>Meeting Date</b>: ${notification.meeting?.meeting_date}</td></tr>
        </div>`;
      }

      message += `<tr<td><h3>Thank you for using our service!</h3></td></tr>`;

      if (
        formatDate(Date.now()) < notification.meeting?.meeting_date ||
        formatDate(Date.now()) < notification.task?.deadline
      ) {
        const job = cron.schedule(
          " * * * * Sunday ", // Every day of week
          () => {
            job.stop();
            transporter
              .sendMail({
                from: "",
                to: `${notification.user?.email}`,
                subject: "BTN E-Report Management System - New Notification",
                html: message,
              })
              .then(console.info)
              .catch(console.error);
            job.start();
          },
          {
            scheduled: false,
            timezone: "Asia/Jakarta",
          }
        );
      } else {
        console.log(
          `Sorry, Notification (${notification.notifmsg}) is not up to date`
        );
      }
    }
  });
};
