import { Op } from "sequelize";
import Meetings from "../models/meetingModel.js";
import User from "../models/userModel.js";

export const getAllMeetings = async (req, res) => {
  try {
    let response;
    if (req.roles === "admin" || "user") {
      response = await Meetings.findAll({
        attributes: [
          "id",
          "uuid",
          "meeting_name",
          "meeting_desc",
          "online_meeting_link",
          "meeting_date",
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
    } else {
      response = await Meetings.findAll({
        attributes: [
          "id",
          "uuid",
          "meeting_name",
          "meeting_desc",
          "online_meeting_link",
          "meeting_date",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
            attributes: ["name", "username"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMeetingById = async (req, res) => {
  try {
    const meeting = await Meetings.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (!meeting) return res.status(404).json({ msg: "Data not Found" });
    let response;
    if (req.roles === "admin" || "user") {
      response = await Meetings.findOne({
        attributes: [
          "id",
          "uuid",
          "meeting_name",
          "meeting_desc",
          "online_meeting_link",
          "meeting_date",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          uuid: meeting.uuid,
        },
        include: [
          {
            model: User,
            attributes: ["name", "username"],
          },
        ],
      });
    } else {
      response = await Meetings.findOne({
        attributes: [
          "id",
          "uuid",
          "meeting_name",
          "meeting_desc",
          "online_meeting_link",
          "meeting_date",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          [Op.and]: [{ uuid: meeting.uuid }, { userId: req.userId }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "username"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createMeeting = async (req, res) => {
  const { meeting_name, meeting_desc, online_meeting_link, meeting_date } =
    req.body;
  try {
    await Meetings.create({
      meeting_name: meeting_name,
      meeting_desc: meeting_desc,
      online_meeting_link: online_meeting_link,
      meeting_date: meeting_date,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Meeting Created Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateMeeting = async (req, res) => {
  try {
    const meeting = await Meetings.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (!meeting) return res.status(404).json({ msg: "Data Not Found" });
    const { meeting_name, meeting_desc, online_meeting_link, meeting_date } =
      req.body;
    if (req.roles === "admin" || "user") {
      await Meetings.update(
        {
          meeting_name,
          meeting_desc,
          online_meeting_link,
          meeting_date,
          userId: req.userId,
        },
        {
          where: {
            uuid: meeting.uuid,
          },
        }
      );
    } else {
      if (req.userId !== meeting.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Meetings.update(
        {
          meeting_name,
          meeting_desc,
          online_meeting_link,
          meeting_date,
          userId: req.userId,
        },
        {
          where: {
            [Op.and]: [{ uuid: meeting.uuid }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Meeting updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meetings.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (!meeting) return res.status(404).json({ msg: "Data not found" });
    if (req.roles === "admin" || "user") {
      await Meetings.destroy({
        where: {
          uuid: meeting.uuid,
        },
      });
    } else {
      if (req.userId !== meeting.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Meetings.destroy({
        where: {
          [Op.and]: [{ uuid: meeting.uuid }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Meeting deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
