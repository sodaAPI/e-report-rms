import Messages from "../models/messageModel.js";
import User from "../models/userModel.js";

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
  const { id, uuid, text, users: room } = req.body;
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
