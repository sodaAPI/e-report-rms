import Report from "../models/reportModel.js";

export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json(reports);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getReportById = async (req, res) => {
  try {
    const report = await Report.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(report[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createReport = async (req, res) => {
  try {
    await Report.create(req.body);
    res.json({
      message: "Report Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateReport = async (req, res) => {
  try {
    await Report.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Report Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteReport = async (req, res) => {
  try {
    await Report.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Report Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
