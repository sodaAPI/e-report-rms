import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  ArrowsRightLeftIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import DataToExcel from "../../../components/dataReportPOKToExcel";
import Pagination from "../../../components/Pagination";

const statusList = ["In Progress", "Complete", "N/A"];

const PokPromoteList = () => {
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
    <div className="w-fit min-h-screen">
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
      <table className="table-compact table-zebra bg-slate-800 rounded-2xl text-white mt-7">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Code</th>
            <th>Promote Name</th>
            <th>Promote Status</th>
            <th>Promote PIC</th>
            <th>Promote Desc</th>
            <th>Changes</th>
            <th>Promote Date</th>
            <th>Side Promote</th>
            <th>Created By</th>
            <th>Created At</th>
            <th>Update At</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reports

            .sort((a, b) => (a.promote_date < b.promote_date ? 1 : -1))
            .filter(
              (report) =>
                report.side_promote === "POK Promote" &&
                (new RegExp(searchTerm, "i").test(report.promote_name) ||
                  new RegExp(searchTerm, "i").test(report.project_code) ||
                  new RegExp(searchTerm, "i").test(report.promote_status) ||
                  new RegExp(searchTerm, "i").test(report.promote_pic) ||
                  new RegExp(searchTerm, "i").test(report.promote_desc) ||
                  new RegExp(searchTerm, "i").test(report.createdAt) ||
                  new RegExp(searchTerm, "i").test(report.updatedAt) ||
                  new RegExp(searchTerm, "i").test(report.side_promote) ||
                  new RegExp(searchTerm, "i").test(report.promote_date) ||
                  new RegExp(searchTerm, "i").test(report.changes))
            )
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((report, index) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.project_code}</td>
                <td>{report.promote_name}</td>
                <td>{report.promote_status}</td>
                <td>{report.promote_pic}</td>
                <td>{report.promote_desc}</td>
                <td>{report.changes}</td>
                <td>{report.promote_date}</td>
                <td>{report.side_promote}</td>
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
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={reports.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
export default PokPromoteList;
