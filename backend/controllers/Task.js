import { Op } from "sequelize";
import Task from "../models/taskModel.js";
import User from "../models/userModel.js";

export const getAllTasks = async (req, res) => {
  try {
    let response;
    if (req.roles === "admin") {
      response = await Task.findAll({
        attributes: [
          "id",
          "uuid",
          "name",
          "status",
          "description",
          "deadline",
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
      response = await Task.findAll({
        attributes: [
          "id",
          "uuid",
          "name",
          "status",
          "description",
          "deadline",
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

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!task) return res.status(404).json({ msg: "Data not Found" });
    let response;
    if (req.roles === "admin") {
      response = await Task.findOne({
        attributes: [
          "id",
          "uuid",
          "name",
          "status",
          "description",
          "deadline",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          id: task.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "username"],
          },
        ],
      });
    } else {
      response = await Task.findOne({
        attributes: [
          "id",
          "uuid",
          "name",
          "status",
          "description",
          "deadline",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          [Op.and]: [{ id: task.id }, { userId: req.userId }],
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

export const createTask = async (req, res) => {
  const { name, status, description, deadline } = req.body;
  try {
    await Task.create({
      name: name,
      status: status,
      description: description,
      deadline: deadline,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Task Created Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!task) return res.status(404).json({ msg: "Data Not Found" });
    const { name, status, description, deadline } = req.body;
    if (req.roles === "admin") {
      await Task.update(
        { name, status, description, deadline },
        {
          where: {
            id: task.id,
          },
        }
      );
    } else {
      if (req.userId !== task.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Task.update(
        { name, status, description, deadline },
        {
          where: {
            [Op.and]: [{ id: task.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!task) return res.status(404).json({ msg: "Data not found" });
    const { name, status, description, deadline } = req.body;
    if (req.roles === "admin") {
      await Task.destroy({
        where: {
          id: task.id,
        },
      });
    } else {
      if (req.userId !== task.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Task.destroy({
        where: {
          [Op.and]: [{ id: task.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
