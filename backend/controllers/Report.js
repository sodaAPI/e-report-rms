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
          "new_existing",
          "ip",
          "nopcr_ir",
          "nama",
          "user_division",
          "core_noncore",
          "detail_deploy",
          "changes",
          "programmer",
          "bp",
          "pm",
          "qa",
          "sa",
          "cmt",
          "dependensi",
          "status",
          "nolap_promote",
          "tanggal_promote",
          "week_eksekusi",
          "week_request",
          "risk_summary",
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
          "new_existing",
          "ip",
          "nopcr_ir",
          "nama",
          "user_division",
          "core_noncore",
          "detail_deploy",
          "changes",
          "programmer",
          "bp",
          "pm",
          "qa",
          "sa",
          "cmt",
          "dependensi",
          "status",
          "nolap_promote",
          "tanggal_promote",
          "week_eksekusi",
          "week_request",
          "risk_summary",
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
        uuid: req.params.uuid,
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
          "new_existing",
          "ip",
          "nopcr_ir",
          "nama",
          "user_division",
          "core_noncore",
          "detail_deploy",
          "changes",
          "programmer",
          "bp",
          "pm",
          "qa",
          "sa",
          "cmt",
          "dependensi",
          "status",
          "nolap_promote",
          "tanggal_promote",
          "week_eksekusi",
          "week_request",
          "risk_summary",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          uuid: report.uuid,
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
          "new_existing",
          "ip",
          "nopcr_ir",
          "nama",
          "user_division",
          "core_noncore",
          "detail_deploy",
          "changes",
          "programmer",
          "bp",
          "pm",
          "qa",
          "sa",
          "cmt",
          "dependensi",
          "status",
          "nolap_promote",
          "tanggal_promote",
          "week_eksekusi",
          "week_request",
          "risk_summary",
          "userId",
          "createdAt",
          "updatedAt",
        ],
        where: {
          [Op.and]: [{ uuid: report.uuid }, { userId: req.userId }],
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
    id,
    uuid,
    project_code,
    new_existing,
    ip,
    nopcr_ir,
    nama,
    user_division,
    core_noncore,
    detail_deploy,
    changes,
    programmer,
    bp,
    pm,
    qa,
    sa,
    cmt,
    dependensi,
    status,
    nolap_promote,
    tanggal_promote,
    week_eksekusi,
    week_request,
    risk_summary,
    createdAt,
    updatedAt,
  } = req.body;
  try {
    await Report.create({
      id: id,
      uuid: uuid,
      project_code: project_code,
      new_existing: new_existing,
      ip: ip,
      nopcr_ir: nopcr_ir,
      nama: nama,
      user_division: user_division,
      core_noncore: core_noncore,
      detail_deploy: detail_deploy,
      changes: changes,
      programmer: programmer,
      bp: bp,
      pm: pm,
      qa: qa,
      sa: sa,
      cmt: cmt,
      dependensi: dependensi,
      status: status,
      nolap_promote: nolap_promote,
      tanggal_promote: tanggal_promote,
      week_eksekusi: week_eksekusi,
      week_request: week_request,
      risk_summary: risk_summary,
      userId: req.userId,
      createdAt: createdAt,
      updatedAt: updatedAt,
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
        uuid: req.params.uuid,
      },
    });
    if (!report) return res.status(404).json({ msg: "Data Not Found" });
    const {
      id,
      uuid,
      project_code,
      new_existing,
      ip,
      nopcr_ir,
      nama,
      user_division,
      core_noncore,
      detail_deploy,
      changes,
      programmer,
      bp,
      pm,
      qa,
      sa,
      cmt,
      dependensi,
      status,
      nolap_promote,
      tanggal_promote,
      week_eksekusi,
      week_request,
      risk_summary,
      createdAt,
      updatedAt,
    } = req.body;
    if (req.roles === "admin" || "user") {
      await Report.update(
        {
          id: id,
          uuid: uuid,
          project_code: project_code,
          new_existing: new_existing,
          ip: ip,
          nopcr_ir: nopcr_ir,
          nama: nama,
          user_division: user_division,
          core_noncore: core_noncore,
          detail_deploy: detail_deploy,
          changes: changes,
          programmer: programmer,
          bp: bp,
          pm: pm,
          qa: qa,
          sa: sa,
          cmt: cmt,
          dependensi: dependensi,
          status: status,
          nolap_promote: nolap_promote,
          tanggal_promote: tanggal_promote,
          week_eksekusi: week_eksekusi,
          week_request: week_request,
          risk_summary: risk_summary,
          userId: req.userId,
          createdAt: createdAt,
          updatedAt: updatedAt,
        },
        {
          where: {
            uuid: report.uuid,
          },
        }
      );
    } else {
      if (req.userId !== report.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Report.update(
        {
          id: id,
          uuid: uuid,
          project_code: project_code,
          new_existing: new_existing,
          ip: ip,
          nopcr_ir: nopcr_ir,
          nama: nama,
          user_division: user_division,
          core_noncore: core_noncore,
          detail_deploy: detail_deploy,
          changes: changes,
          programmer: programmer,
          bp: bp,
          pm: pm,
          qa: qa,
          sa: sa,
          cmt: cmt,
          dependensi: dependensi,
          status: status,
          nolap_promote: nolap_promote,
          tanggal_promote: tanggal_promote,
          week_eksekusi: week_eksekusi,
          week_request: week_request,
          risk_summary: risk_summary,
          userId: req.userId,
          createdAt: createdAt,
          updatedAt: updatedAt,
        },
        {
          where: {
            [Op.and]: [{ uuid: report.uuid }, { userId: req.userId }],
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
        uuid: req.params.uuid,
      },
    });
    if (!report) return res.status(404).json({ msg: "Data not found" });
    if (req.roles === "admin" || "user") {
      await Report.destroy({
        where: {
          uuid: report.uuid,
        },
      });
    } else {
      if (req.userId !== report.userId)
        return res.status(403).json({ msg: "Unauthorized Access" });
      await Report.destroy({
        where: {
          [Op.and]: [{ uuid: report.uuid }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
