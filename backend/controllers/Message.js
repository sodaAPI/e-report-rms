import Messages from "../models/messageModel.js";
import User from "../models/userModel.js";
import { Op } from "sequelize";

export const getMessages = async (req, res) => {
  try {
    let response;
    response = await Messages.findAll({
      attributes: [
        "id",
        "uuid",
        "text",
        "room",
        "userId",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: User,
          attributes: ["name", "username"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addMessage = async (req, res) => {
  const { id, uuid, text, room } = req.body;
  try {
    await Messages.create({
      id: id,
      uuid: uuid,
      text: text,
      room: room,
      userId: req.userId,
    });
    res.status(201).json({ message: "Message created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating message", error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const messages = await Messages.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (!messages) return res.status(404).json({ msg: "Data not found" });
    if (req.roles === "admin") {
      await Messages.destroy({
        where: {
          uuid: messages.uuid,
        },
      });
    } else {
      if (req.userId !== messages.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Messages.destroy({
        where: {
          [Op.and]: [{ uuid: messages.uuid }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
