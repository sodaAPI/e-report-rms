import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  FunnelIcon,
} from "@heroicons/react/20/solid";
import Pagination from "../../../components/Pagination";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { parseISO } from "date-fns";
import moment from "moment";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);
  const [setNotification] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [notifmsg] = useState("");
  const [meetingId] = useState("");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getMeetings();
    getNotification();
  }, []);

  const getMeetings = async () => {
    const response = await axios.get("http://localhost:5000/meeting");
    setMeetings(response.data);
  };

  const getNotification = async () => {
    const response = await axios.get("http://localhost:5000/notification/get");
    setNotification(response.data);
  };

  const deleteMeetings = async (uuid) => {
    await axios.delete(`http://localhost:5000/meeting/${uuid}`);
    getMeetings();
  };

  const allowNotification = async () => {
    await axios.post(`http://localhost:5000/notification/push`, {
      notifmsg: notifmsg,
      meetingId: meetingId,
    });
    window.alert(
      "Meeting Notification has been added successfully, you will be get notified every week"
    );
  };

  const addNotification = async (uuid) => {
    try {
      const response = await axios.get(`http://localhost:5000/meeting/${uuid}`);
      const meetingId = response.data.id;
      await axios.post(`http://localhost:5000/notification/addbyid`, {
        meetingId: meetingId,
      });
      allowNotification();
      getNotification();
    } catch (error) {
      if (error.response) {
        window.alert(`An error occurred: ${error.response.data.message}`);
      }
    }
  };

  const truncate = (input) =>
    input?.length > 40 ? `${input.substring(0, 40)}...` : input;

  const [searchTerm, setSearchTerm] = useState("");

  const [state, setState] = useState({
    startDate: parseISO(moment().startOf("year").toISOString()),
    endDate: parseISO(moment().toISOString()),
    key: "selection",
  });

  return (
    <div className="py-8 w-fit min-h-screen">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3">
        <Link
          to="/dashboard/meeting/add"
          className="flex flex-row items-center gap-2 bg-sky-900 hover:bg-sky-800 rounded-xl p-3 text-white">
          <PlusCircleIcon className="w-5 h-5" />
          Add New Meeting
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
            by Meeting Date
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
            <DateRange
              ranges={[state]}
              onChange={(item) => setState(item.selection)}
              className="rounded-xl"
            />
          </ul>
        </div>
        <div className="py-3 sm:px-10 px-0">
          <span className="flex flex-row items-center gap-2  rounded-xl text-white">
            <InformationCircleIcon className="w-5 h-5" />
            Click on Online Meeting Link to Copy
          </span>
        </div>
      </div>
      <table className="table-compact table-zebra bg-slate-800 rounded-2xl text-white mt-7">
        <thead>
          <tr>
            <th>ID</th>
            <th>Meeting Name</th>
            <th>Meeting Desc</th>
            <th>Online Meeting Link</th>
            <th>Meeting Date</th>
            <th>Created By</th>
            <th>Created At</th>
            <th>Update At</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {meetings
            .filter(
              (meeting) =>
                state.startDate == null ||
                state.endDate == null ||
                (new Date(meeting.updatedAt) >= state.startDate &&
                  new Date(meeting.updatedAt) <= state.endDate)
            )
            .filter(
              (meeting) =>
                new RegExp(searchTerm, "i").test(meeting.id) ||
                new RegExp(searchTerm, "i").test(meeting.uuid) ||
                new RegExp(searchTerm, "i").test(meeting.meeting_name) ||
                new RegExp(searchTerm, "i").test(meeting.meeting_desc) ||
                new RegExp(searchTerm, "i").test(meeting.online_meeting_link) ||
                new RegExp(searchTerm, "i").test(meeting.meeting_date) ||
                new RegExp(searchTerm, "i").test(meeting.edited_by) ||
                new RegExp(searchTerm, "i").test(meeting.createdAt) ||
                new RegExp(searchTerm, "i").test(meeting.updatedAt)
            )
            .sort((a, b) => (a.meeting_date < b.meeting_date ? 1 : -1))
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((meeting, index) => (
              <tr key={meeting.id}>
                <td>{meeting.id}</td>
                <td>{meeting.meeting_name}</td>
                <td>{meeting.meeting_desc}</td>

                <td>
                  <button
                    className="rounded-lg hover:bg-slate-700 text-start"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        meeting.online_meeting_link
                      );
                      window.alert("Link Copied");
                    }}>
                    {truncate(meeting.online_meeting_link)}
                  </button>
                </td>

                <td>{meeting.meeting_date}</td>
                <td>{meeting.user?.name}</td>
                <td>{meeting.createdAt}</td>
                <td>{meeting.updatedAt}</td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to add notification from this item?"
                        )
                      )
                        addNotification(meeting.uuid);
                    }}
                    className="flex flex-row bg-purple-700 p-2 rounded-lg text-white">
                    <BellAlertIcon className="w-5 h-5" />
                  </button>
                </td>
                <td>
                  <a
                    href={meeting.online_meeting_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 p-2 rounded-lg text-white">
                    Join
                  </a>
                </td>
                <td>
                  <Link
                    to={`/dashboard/meeting/edit/${meeting.uuid}`}
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
                        deleteMeetings(meeting.uuid);
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
        totalItems={meetings.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default MeetingList;
