import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ArrowsRightLeftIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import DataToExcel from "../../../components/dataReportInProgressToExcel";
import Pagination from "../../../components/Pagination";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { parseISO } from "date-fns";
import moment from "moment";

const statusList = ["In Progress", "Complete"];

const ReportInProgressList = () => {
  const [reports, setReport] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    const skip = (currentPage - 1) * itemsPerPage;
    const limit = itemsPerPage;
    const response = await axios.get(
      `http://localhost:5000/report?skip=${skip}&limit=${limit}`
    );
    setReport(response.data);
  };

  const deleteReport = async (uuid) => {
    await axios.delete(`http://localhost:5000/report/${uuid}`);
    getReports();
  };

  const checkStatus = (status) => {
    if (status === statusList[0]) {
      return "Complete";
    } else {
      return "In Progress";
    }
  };

  const updateStatus = async (uuid) => {
    const response = await axios.get(`http://localhost:5000/report/${uuid}`);
    const status = checkStatus(response.data.status);
    await axios.patch(`http://localhost:5000/report/${uuid}`, { status });
    window.alert("Report Updated Successfully");
    getReports();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [state, setState] = useState({
    startDate: parseISO(moment().startOf("year").toISOString()),
    endDate: parseISO(moment().toISOString()),
    key: "selection",
  });

  return (
    <div className="w-full py-8 min-h-screen">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3">
        <Link
          to="/dashboard/report/add"
          className="flex flex-row  items-center gap-2 bg-sky-900 hover:bg-sky-800 rounded-xl p-3 text-white">
          <PlusCircleIcon className="w-5 h-5" />
          Add New e-Report
        </Link>
        <div className="flex flex-row items-center">
          <div className="bg-slate-700 p-3 rounded-l-xl">
            <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          </div>
          <input
            className="input bg-white rounded-r-xl rounded-l-none e p-3 text-gray-800"
            type="text"
            placeholder="Search Reports..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="flex flex-row gap-1 items-center justify-center btn normal-case m-1">
            <FunnelIcon className="w-5 h-5" />
            Promote by Date
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <DateRange
              ranges={[state]}
              onChange={(item) => setState(item.selection)}
              className="rounded-xl"
            />
          </ul>
        </div>
        <DataToExcel />
      </div>
      <div className="overflow-auto w-10/12 rounded-2xl">
        <table className="table-compact table-zebra bg-slate-800 rounded-2xl text-white mt-7">
          <thead>
            <tr>
              <th>ID</th>
              <th>Project Code</th>
              <th>New/Existing</th>
              <th>IP</th>
              <th>No PCR/IR</th>
              <th>Nama</th>
              <th>User</th>
              <th>Core/Non Core</th>
              <th>Detail Deploy</th>
              <th>Changes</th>
              <th>Programmer</th>
              <th>BP</th>
              <th>PM</th>
              <th>QA</th>
              <th>SA</th>
              <th>CMT</th>
              <th>Dependensi</th>
              <th>Status</th>
              <th>No Lap Promote</th>
              <th>Tanggal Promote</th>
              <th>Week Eksekusi</th>
              <th>Week Request</th>
              <th>Risk Summary</th>
              <th>By</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reports
              .filter(
                (report) =>
                  state.startDate == null ||
                  state.endDate == null ||
                  (new Date(report.tanggal_promote) >= state.startDate &&
                    new Date(report.tanggal_promote) <= state.endDate)
              )
              .filter(
                (report) =>
                  report.status !== "Complete" &&
                  (new RegExp(searchTerm, "i").test(report.id) ||
                    new RegExp(searchTerm, "i").test(report.project_code) ||
                    new RegExp(searchTerm, "i").test(report.new_existing) ||
                    new RegExp(searchTerm, "i").test(report.ip) ||
                    new RegExp(searchTerm, "i").test(report.nopcr_ir) ||
                    new RegExp(searchTerm, "i").test(report.nama) ||
                    new RegExp(searchTerm, "i").test(report.user_division) ||
                    new RegExp(searchTerm, "i").test(report.core_noncore) ||
                    new RegExp(searchTerm, "i").test(report.detail_deploy) ||
                    new RegExp(searchTerm, "i").test(report.changes) ||
                    new RegExp(searchTerm, "i").test(report.programmer) ||
                    new RegExp(searchTerm, "i").test(report.bp) ||
                    new RegExp(searchTerm, "i").test(report.pm) ||
                    new RegExp(searchTerm, "i").test(report.qa) ||
                    new RegExp(searchTerm, "i").test(report.sa) ||
                    new RegExp(searchTerm, "i").test(report.cmt) ||
                    new RegExp(searchTerm, "i").test(report.dependensi) ||
                    new RegExp(searchTerm, "i").test(report.status) ||
                    new RegExp(searchTerm, "i").test(report.nolap_promote) ||
                    new RegExp(searchTerm, "i").test(report.tanggal_promote) ||
                    new RegExp(searchTerm, "i").test(report.week_eksekusi) ||
                    new RegExp(searchTerm, "i").test(report.week_request) ||
                    new RegExp(searchTerm, "i").test(report.risk_summary) ||
                    new RegExp(searchTerm, "i").test(report.user?.name) ||
                    new RegExp(searchTerm, "i").test(report.createdAt) ||
                    new RegExp(searchTerm, "i").test(report.updatedAt))
              )
              .sort((a, b) => (a.promote_date < b.promote_date ? 1 : -1))
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((report, index) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.project_code}</td>
                  <td>{report.new_existing}</td>
                  <td>{report.ip}</td>
                  <td>{report.nopcr_ir}</td>
                  <td>{report.nama}</td>
                  <td>{report.user_division}</td>
                  <td>{report.core_noncore}</td>
                  <td>{report.detail_deploy}</td>
                  <td>{report.changes}</td>
                  <td>{report.programmer}</td>
                  <td>{report.bp}</td>
                  <td>{report.pm}</td>
                  <td>{report.qa}</td>
                  <td>{report.sa}</td>
                  <td>{report.cmt}</td>
                  <td>{report.dependensi}</td>
                  <td>{report.status}</td>
                  <td>{report.nolap_promote}</td>
                  <td>{report.tanggal_promote}</td>
                  <td>{report.week_eksekusi}</td>
                  <td>{report.week_request}</td>
                  <td>{report.risk_summary}</td>
                  <td>{report.user?.name}</td>
                  <td>{report.createdAt}</td>
                  <td>{report.updatedAt}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to update this report?"
                          )
                        )
                          updateStatus(report.uuid);
                      }}
                      className="flex flex-row items-center gap-2 outline outline-2 outline-slate-400 hover:bg-slate-600 hover:outline-none p-2 rounded-lg text-white">
                      <ArrowsRightLeftIcon className="w-4 h-4" /> Status
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/report/edit/${report.uuid}`}
                      className="bg-green-500 p-2 rounded-lg text-white">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this item?"
                          )
                        )
                          deleteReport(report.uuid);
                      }}
                      className="bg-red-700 p-2 rounded-lg text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={reports.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
export default ReportInProgressList;
