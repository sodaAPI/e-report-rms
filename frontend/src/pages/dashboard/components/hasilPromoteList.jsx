import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import DataToExcel from "../../../components/dataReportHasilToExcel";
import Pagination from "../../../components/Pagination";

const statusList = ["In Progress", "Complete", "N/A"];

const HasilPromoteList = () => {
  const [reports, setReport] = useState([]);
  const [promote_status, setPromoteStatus] = useState(statusList[0]);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getReports();
    getReportById();
  }, []);

  const getReports = async () => {
    const response = await axios.get("http://localhost:5000/report");
    setReport(response.data);
  };

  const deleteReport = async (id) => {
    await axios.delete(`http://localhost:5000/report/${id}`);
    getReports();
  };

  const checkStatus = (status) => {
    if (status === statusList[0]) {
      return "Complete";
    } else {
      return "In Progress";
    }
  };

  const updateStatus = async (id) => {
    const response = await axios.get(`http://localhost:5000/report/${id}`);
    const promote_status = checkStatus(response.data.promote_status);
    await axios.patch(`http://localhost:5000/report/${id}`, { promote_status });
    window.alert("Report Updated Successfully");
    getReports();
  };

  const getReportById = async () => {
    const response = await axios.get(`http://localhost:5000/report/${id}`);
    setPromoteStatus(response.data.promote_status);
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full  min-h-screen">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3">
        <Link
          to="/dashboard/report/add"
          className="flex flex-row p-3 items-center gap-2 bg-sky-900 hover:bg-sky-800 rounded-xl text-white">
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
        <DataToExcel />
      </div>
      <div className="overflow-auto w-5/6  rounded-2xl">
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
              <th>Keterangan Project</th>
              <th>Status</th>
              <th>No Lap Promote</th>
              <th>Tanggal Promote</th>
              <th>Week Eksekusi</th>
              <th>Risk Summary</th>
              <th>Report Type</th>
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
                  report.report_type === "Hasil Promote" &&
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
                    new RegExp(searchTerm, "i").test(
                      report.keterangan_project
                    ) ||
                    new RegExp(searchTerm, "i").test(report.status) ||
                    new RegExp(searchTerm, "i").test(report.nolap_promote) ||
                    new RegExp(searchTerm, "i").test(report.tanggal_promote) ||
                    new RegExp(searchTerm, "i").test(report.week_eksekusi) ||
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
                  <td>{report.keterangan_project}</td>
                  <td>{report.status}</td>
                  <td>{report.nolap_promote}</td>
                  <td>{report.tanggal_promote}</td>
                  <td>{report.week_eksekusi}</td>
                  <td>{report.risk_summary}</td>
                  <td>{report.report_type}</td>
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
                          updateStatus(report.id);
                      }}
                      className="flex flex-row items-center gap-2 outline outline-2 outline-slate-400 hover:bg-slate-600 hover:outline-none p-2 rounded-lg text-white">
                      <ArrowsRightLeftIcon className="w-4 h-4" /> Status
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/report/edit/${report.id}`}
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
                          deleteReport(report.id);
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
export default HasilPromoteList;
