import Task from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(task[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.json({
      message: "Task Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Task Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Task Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
