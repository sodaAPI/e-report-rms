/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import ReportChartMonth from "./reportChartMonth";
import ReportChartAll from "./reportCharts";
import TaskChart from "./taskChart";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import DateNow from "../../components/dateNow";

import { Calendar } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Dashboards() {
  const [reports, setReport] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [users, setUsers] = useState([]);
  const [task, setTask] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  //User
  const { user } = useSelector((state) => state.auth);

  //GO TO
  const gotoReport = async () => {
    let path = "/dashboard/report";
    navigate(path);
  };

  const gotoTask = async () => {
    let path = "/dashboard/task";
    navigate(path);
  };

  const gotoMeeting = async () => {
    let path = "/dashboard/meeting";
    navigate(path);
  };

  const gotoUser = async () => {
    let path = "/dashboard/user";
    navigate(path);
  };

  // GET & POST
  const getReports = async () => {
    const response = await axios.get("http://localhost:5000/report");
    setReport(response.data);
  };
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUsers(response.data);
  };

  const getMeetings = async () => {
    const response = await axios.get("http://localhost:5000/meeting");
    setMeetings(response.data);
  };

  const getTasks = async () => {
    const response = await axios.get("http://localhost:5000/task");
    setTask(response.data);
  };

  const updateStatus = async (uuid) => {
    await axios.patch(`http://localhost:5000/task/${uuid}`, {
      status: "Completed",
    });
    window.alert("Task Updated Successfully");
    getTasks();
  };

  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  useEffect(() => {
    getReports();
    getMeetings();
    getTasks();
    getUsers();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [locale] = React.useState("id");
  const [date, setDate] = useState(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-5 py-8">
        <div className="flex flex-col w-full">
          <div className="flex lg:flex-row flex-col bg-sky-900 p-4 bg-opacity-10 rounded-lg">
            <div className="flex lg:flex-col flex-col items-center justify-center w-full px-5 font-bold text-3xl text-white">
              Welcome Back,{" "}
              <span className=" text-sky-300 font-normal text-2xl">
                {" "}
                {user && user.name}
              </span>
              <div className="divider px-48"></div>
              <span className="text-slate-500 font-normal text-base">
                {user && user.division} - {user && user.roles}
              </span>
            </div>
            <div className="w-full flex lg:flex-row gap-5">
              <button
                onClick={gotoReport}
                className="flex flex-col gap-2 px-5 w-1/3 mt-5 py-2 text-start bg-sky-600 hover:bg-sky-500 rounded-lg text-white font-bold">
                <ChartBarIcon className="w-10 h-10" />
                <span>Reports</span>
                <span>Total</span>
                <span className="font-black">{reports.length}</span>
                <EllipsisHorizontalIcon className=" w-5 h-5" />
              </button>
              <button
                onClick={gotoTask}
                className="flex flex-col gap-2 px-5 w-1/3 mt-5 py-2 text-start bg-green-700 hover:bg-green-600 rounded-lg text-white font-bold">
                <DocumentCheckIcon className="w-10 h-10" />
                <span>Tasks</span>
                <span>Total</span>
                <span className="font-black">{task.length}</span>
                <EllipsisHorizontalIcon className=" w-5 h-5" />
              </button>
              <button
                onClick={gotoMeeting}
                className="flex flex-col gap-2 px-5 w-1/3 mt-5 py-2 text-start bg-yellow-600 hover:bg-yellow-500 rounded-lg text-white font-bold">
                <UserGroupIcon className="w-10 h-10" />
                <span>Meeting</span>
                <span>Total</span>
                <span className="font-black">{meetings.length}</span>
                <EllipsisHorizontalIcon className=" w-5 h-5" />
              </button>
              {user && user.roles === "admin" && (
                <button
                  onClick={gotoUser}
                  className="flex flex-col gap-2 px-5 w-1/3 mt-5 py-2 text-start bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold">
                  <UserGroupIcon className="w-10 h-10" />
                  <span>User</span>
                  <span>Total</span>
                  <span className="font-black">{users.length}</span>
                  <EllipsisHorizontalIcon className=" w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-10 bg-sky-900 bg-opacity-20 p-5 rounded-xl">
            <button
              data-tip="Report Page"
              className=" tooltip flex self-end hover:text-white"
              onClick={gotoReport}>
              <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
            <span className="pb-5 text-white font-bold text-lg">
              All Reports
            </span>
            <div className="sm:mr-10 mr-0">
              <ReportChartAll />
            </div>
          </div>
          <div className="flex gap-5 lg:flex-row flex-col justify-center items-center pt-10">
            <div className="flex flex-col items-center w-full bg-sky-900 bg-opacity-20 p-5 rounded-xl">
              <button
                data-tip="Report Page"
                className=" tooltip flex self-end hover:text-white"
                onClick={gotoReport}>
                <EllipsisVerticalIcon className="w-6 h-6" />
              </button>
              <span className="pb-5 text-white font-bold text-lg">
                Reports {monthNames[d.getMonth()]}
              </span>
              <div className="sm:mr-14 mr-0">
                <ReportChartMonth />
              </div>
            </div>

            <div className="flex flex-col items-center w-full bg-sky-900 bg-opacity-20 p-5 rounded-xl">
              <button
                data-tip="Task Page"
                className=" tooltip flex self-end hover:text-white"
                onClick={gotoTask}>
                <EllipsisVerticalIcon className="w-6 h-6" />
              </button>
              <span className="pb-5 text-white font-bold text-lg">Tasks</span>
              <TaskChart />
            </div>
          </div>

          {/* Reports Table */}
          <div className="flex flex-row gap-3 items-center mt-5">
            <label className="text-white text-xl font-bold">
              Latest Promote
            </label>
            <button
              onClick={gotoReport}
              data-tip="See more"
              className=" tooltip tooltip-right font-bold hover:bg-slate-700 hover:rounded-md">
              <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
          </div>
          <table className="table-compact table-zebra w-full bg-slate-800 rounded-2xl text-white mt-7">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Project</th>
                <th>PIC CMT</th>
                <th>Changes</th>
                <th>Promote Date</th>
                <th className="lg:block hidden">Report Type</th>
              </tr>
            </thead>
            <tbody>
              {reports
                .filter(
                  (report) => report.promote_status === "In Progress" || "N/A"
                )
                .sort((a, b) =>
                  a.tanggal_promote < b.tanggal_promote ? 1 : -1
                )
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((report) => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.nama}</td>
                    <td>{report.cmt}</td>
                    <td>{report.changes}</td>
                    <td>{report.tanggal_promote}</td>
                    <td className="lg:block hidden">{report.risk_summary}</td>
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

        {/* Calendar & Clock */}
        <div className="flex flex-col items-center h-fit px-5 lg:w-1/4 w-full bg-slate-800 rounded-xl py-2">
          <span className="flex flex-row mt-3 gap-1">
            Date & Time : <DateNow />
          </span>
          <div className="divider" />
          <span className="mb-3 text-lg text-white ">Calendar</span>
          <Calendar
            className="rounded-xl"
            onChange={(item) => setDate(item)}
            locale={locales[locale]}
            date={date}
          />
          <div className="divider" />
          {/* Up Coming Meetings */}
          <span className="text-lg text-white pb-2">Up Coming Meetings</span>
          <table className="table-compact table-zebra w-full bg-slate-800 rounded-2xl text-white">
            <thead>
              <tr>
                <th>Meeting</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {meetings
                .filter(
                  (meeting) => meeting.meeting_date >= formatDate(Date.now())
                )
                .sort((a, b) => (a.meeting_date < b.meeting_date ? 1 : -1))
                .slice(0, 3)
                .map((meeting) => (
                  <tr key={meeting.id}>
                    <td>{meeting.meeting_name}</td>
                    <td>{meeting.meeting_date}</td>
                    <td>
                      <a
                        href={meeting.online_meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-2 bg-blue-500 hover:bg-blue-400 p-2 rounded-lg text-white">
                        <ChatBubbleBottomCenterIcon className="w-5 h-5" />
                        Join
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            onClick={gotoMeeting}
            className="flex flex-row items-center gap-2 py-3 hover:text-white">
            <EllipsisHorizontalIcon className="w-5 h-5" />
            <span>See more</span>
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </button>
          <div className="divider" />
          {/* Task List */}
          <span className="text-lg text-white pb-2">Task List</span>
          <table className="table-compact table-zebra w-full bg-slate-800 rounded-2xl text-white">
            <thead>
              <tr>
                <th>Task</th>
                <th>Deadline</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {task
                .filter((task) => task.status === "Uncompleted")
                .sort((a, b) => (a.deadline < b.deadline ? 1 : -1))
                .slice(0, 5)
                .map((singletask) => (
                  <tr key={singletask.id}>
                    <td>{singletask.name}</td>
                    <td>{singletask.deadline}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to update this task?"
                            )
                          )
                            updateStatus(singletask.uuid);
                        }}
                        className="flex flex-row gap-2 bg-green-600 hover:bg-green-500 p-2 rounded-lg text-white">
                        <CheckCircleIcon className="w-5 h-5" />
                        Done
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            onClick={gotoTask}
            className="flex flex-row items-center gap-2 hover:text-white py-3">
            <EllipsisHorizontalIcon className="w-5 h-5" />
            <span>See more</span>
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
