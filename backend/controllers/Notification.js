import Notification from "../models/notificationModel.js";
import User from "../models/userModel.js";
import Task from "../models/taskModel.js";
import Meeting from "../models/meetingModel.js";
import { Op } from "sequelize";

export const getNotifications = async (req, res) => {
  try {
    let response;
    response = await Notification.findAll({
      attributes: [
        "id",
        "uuid",
        "notif",
        "taskId",
        "meetingId",
        "userId",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: User,
          attributes: ["name", "username"],
        },
        {
          model: Task,
          attributes: ["name", "status", "deadline"],
        },
        {
          model: Meeting,
          attributes: ["meeting_name", "online_meeting_link", "meeting_date"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addNotification = async (req, res) => {
  const { id, uuid, notif } = req.body;
  try {
    await Notification.create({
      id: id,
      uuid: uuid,
      notif: notif,
      taskId: req.taskId,
      meetingId: req.meetingId,
      userId: req.userId,
    });
    res.status(201).json({ message: "Message created successfully" });
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
    const { id, uuid, notif } = req.body;
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
    res.status(200).json({ msg: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
