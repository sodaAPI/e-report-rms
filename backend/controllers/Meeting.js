import Meetings from "../models/meetingModel.js";

export const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meetings.findAll();
    res.json(meetings);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getMeetingById = async (req, res) => {
  try {
    const meetings = await Meetings.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(meetings[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createMeeting = async (req, res) => {
  try {
    await Meetings.create(req.body);
    res.json({
      message: "Meeting Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateMeeting = async (req, res) => {
  try {
    await Meetings.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Meeting Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteMeeting = async (req, res) => {
  try {
    await Meetings.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Meeting Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
