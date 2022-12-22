import { Op } from "sequelize";
import Report from "../models/reportModel.js";
import User from "../models/userModel.js";

export const getAllReports = async (req, res) => {
  try {
    let response;
    if (req.roles === "admin" || "user") {
      response = await Report.findAll({
        attributes: [
          "id",
          "uuid",
          "project_code",
          "promote_name",
          "promote_status",
          "promote_pic",
          "promote_desc",
          "src_file",
          "changes",
          "promote_date",
          "execute_week",
          "request_week",
          "side_promote",
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
      response = await Report.findAll({
        attributes: [
          "id",
          "uuid",
          "project_code",
          "promote_name",
          "promote_status",
          "promote_pic",
          "promote_desc",
          "src_file",
          "changes",
          "promote_date",
          "execute_week",
          "request_week",
          "side_promote",
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

export const getReportById = async (req, res) => {
  try {
    const report = await Report.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(404).json({ msg: "Data not Found" });
    let response;
    if (req.roles === "admin" || "user") {
      response = await Report.findOne({
        attributes: [
          "id",
          "uuid",
          "project_code",
          "promote_name",
          "promote_status",
          "promote_pic",
          "promote_desc",
          "src_file",
          "changes",
          "promote_date",
          "execute_week",
          "request_week",
          "side_promote",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          id: report.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "username"],
          },
        ],
      });
    } else {
      response = await Report.findOne({
        attributes: [
          "id",
          "uuid",
          "project_code",
          "promote_name",
          "promote_status",
          "promote_pic",
          "promote_desc",
          "src_file",
          "changes",
          "promote_date",
          "execute_week",
          "request_week",
          "side_promote",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          [Op.and]: [{ id: report.id }, { userId: req.userId }],
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

export const createReport = async (req, res) => {
  const {
    project_code,
    promote_name,
    promote_status,
    promote_pic,
    promote_desc,
    src_file,
    changes,
    promote_date,
    execute_week,
    request_week,
    side_promote,
  } = req.body;
  try {
    await Report.create({
      project_code: project_code,
      promote_name: promote_name,
      promote_status: promote_status,
      promote_pic: promote_pic,
      promote_desc: promote_desc,
      src_file: src_file,
      changes: changes,
      promote_date: promote_date,
      execute_week: execute_week,
      request_week: request_week,
      side_promote: side_promote,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Report Created Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateReport = async (req, res) => {
  try {
    const report = await Report.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(404).json({ msg: "Data Not Found" });
    const {
      project_code,
      promote_name,
      promote_status,
      promote_pic,
      promote_desc,
      src_file,
      changes,
      promote_date,
      execute_week,
      request_week,
      side_promote,
    } = req.body;
    if (req.roles === "admin" || "user") {
      await Report.update(
        {
          project_code: project_code,
          promote_name: promote_name,
          promote_status: promote_status,
          promote_pic: promote_pic,
          promote_desc: promote_desc,
          src_file: src_file,
          changes: changes,
          promote_date: promote_date,
          execute_week: execute_week,
          request_week: request_week,
          side_promote: side_promote,
          userId: req.userId,
        },
        {
          where: {
            id: report.id,
          },
        }
      );
    } else {
      if (req.userId !== report.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Report.update(
        {
          project_code: project_code,
          promote_name: promote_name,
          promote_status: promote_status,
          promote_pic: promote_pic,
          promote_desc: promote_desc,
          src_file: src_file,
          changes: changes,
          promote_date: promote_date,
          execute_week: execute_week,
          request_week: request_week,
          side_promote: side_promote,
          userId: req.userId,
        },
        {
          where: {
            [Op.and]: [{ id: report.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Report updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const report = await Report.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(404).json({ msg: "Data not found" });
    const {
      project_code,
      promote_name,
      promote_status,
      promote_pic,
      promote_desc,
      src_file,
      changes,
      promote_date,
      execute_week,
      request_week,
      side_promote,
    } = req.body;
    if (req.roles === "admin" || "user") {
      await Report.destroy({
        where: {
          id: report.id,
        },
      });
    } else {
      if (req.userId !== report.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Report.destroy({
        where: {
          [Op.and]: [{ id: report.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
