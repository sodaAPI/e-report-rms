/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  UserIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Clock from "react-digital-clock";
import CompleteReportChart from "./completeReportChart";

const statusList = ["Uncompleted", "Completed"];

export default function Dashboards() {
  const [users, setUser] = useState([]);
  const [reports, setReport] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [task, setTask] = useState([]);
  const [status, setStatus] = useState(statusList[0]);
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUsers();
    getReports();
    getMeetings();
    getTasks();
    getTaskById();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/user");
    setUser(response.data);
  };

  const getReports = async () => {
    const response = await axios.get("http://localhost:5000/report");
    setReport(response.data);
  };

  const getMeetings = async () => {
    const response = await axios.get("http://localhost:5000/meeting");
    setMeetings(response.data);
  };

  const getTasks = async () => {
    const response = await axios.get("http://localhost:5000/task");
    setTask(response.data);
  };

  const gotoUser = async () => {
    let path = "/dashboard/user";
    navigate(path);
  };

  const gotoReport = async () => {
    let path = "/dashboard/report";
    navigate(path);
  };

  const truncate = (input) =>
    input?.length > 4 ? `${input.substring(0, 55)}...` : input;

  const updateStatus = async (id) => {
    await axios.patch(`http://localhost:5000/task/${id}`, {
      status: "Completed",
    });
    window.alert("Task Updated Successfully");
    getTasks();
  };

  const getTaskById = async () => {
    const response = await axios.get(`http://localhost:5000/task/${id}`);
    setStatus(response.data.status);
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <section>
      <div className="flex sm:flex-row flex-col gap-5 py-8">
        <div className="flex flex-col w-full">
          <div className="px-5 text-xl text-white">
            {/* <div className=" w-full">
              <TaskChart />
            </div> */}
            Welcome Back
            <span className="text-sky-300"> $user-name </span>!
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center pt-10">
            <div className="flex flex-col items-center w-9/12">
              <CompleteReportChart />
              <a
                onClick={gotoReport}
                className="flex flex-row justify-center items-center gap-2 sm:w-1/2 w-3/4 mt-5 py-3 bg-green-700 hover:bg-green-600 rounded-lg text-white font-bold">
                <ChartBarIcon className="w-6 h-6 " />
                <span>Reports Total</span>
                <span className="font-medium">{reports.length}</span>
              </a>
              {/* <a
                onClick={gotoUser}
                className="flex flex-row justify-center items-center gap-2 sm:w-1/2 w-3/4  mt-5 py-3 bg-sky-700 hover:bg-sky-600 rounded-lg text-white font-bold">
                <UserIcon className="w-6 h-6" />
                <span>Users Total</span>
                <span className="font-medium">{users.length}</span>
              </a> */}
            </div>

            {/* <div className="flex flex-col items-center w-9/12 sm:pt-0 pt-5">
              <ReportChartComplete />
              <a
                onClick={gotoReport}
                className="flex flex-row justify-center items-center gap-2 sm:w-1/2 w-3/4 mt-5 py-3 bg-green-700 hover:bg-green-600 rounded-lg text-white font-bold">
                <ChartBarIcon className="w-6 h-6 " />
                <span>Reports Total</span>
                <span className="font-medium">{reports.length}</span>
              </a>
            </div> */}
          </div>

          {/* Reports Table */}
          <table className="table-compact w-full bg-slate-800 rounded-2xl text-white mt-7">
            <thead>
              <tr>
                <th>ID</th>
                <th>Promote Name</th>
                <th>Promote PIC</th>
                <th>Changes</th>
                <th>Promote Date</th>
                <th className="sm:block hidden">Side Promote</th>
              </tr>
            </thead>
            <tbody>
              {reports
                .filter(
                  (report) => report.promote_status == "In Progress" && "N/A"
                )
                .sort((a, b) => (a.promote_date < b.promote_date ? 1 : -1))
                .slice(0, 10)
                .map((report) => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.promote_name}</td>
                    <td>{report.promote_pic}</td>
                    <td>{report.changes}</td>
                    <td>{report.promote_date}</td>
                    <td className="sm:block hidden">{report.side_promote}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Calendar & Clock */}
        <div className="flex flex-col items-center h-fit px-5 sm:w-1/4 w-full bg-slate-800 rounded-xl py-2">
          <span className="flex flex-row mt-3">
            Time :<Clock />
          </span>
          <div className="divider" />
          <span className="text-lg text-white ">Calendar</span>
          <Calendar
            className="rounded-xl mt-3 bg-sky-900 border-none bg-opacity-10 mb-3"
            calendarType="US"
            onChange={onChange}
            value={value}
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
                ) // Filter out meetings with a date that is less than or equal to the current date
                .sort((a, b) => (a.meeting_date < b.meeting_date ? 1 : -1))
                .slice(0, 3)
                .map((meeting, index) => (
                  <tr key={meeting.meeting_date}>
                    <td>{meeting.meeting_name}</td>
                    <td>{meeting.meeting_date}</td>
                    <td>
                      <a
                        href={meeting.online_meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-2 bg-blue-500 p-2 rounded-lg text-white">
                        <ChatBubbleBottomCenterIcon className="w-5 h-5" />
                        Join
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
                    {/* <td>{truncate(meeting.meeting_name)}</td> */}
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
                            updateStatus(singletask.id);
                        }}
                        className="flex flex-row gap-2 bg-green-600 p-2 rounded-lg text-white">
                        <CheckCircleIcon className="w-5 h-5"/>Done
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
