import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import Pagination from "../../../components/Pagination";

const MeetingList = () => {
  //User
  const { user } = useSelector((state) => state.auth);
  const [meetings, setMeetings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getMeetings();
  }, []);

  const getMeetings = async () => {
    const response = await axios.get("http://localhost:5000/meeting");
    setMeetings(response.data);
  };

  const deleteMeetings = async (id) => {
    await axios.delete(`http://localhost:5000/meeting/${id}`);
    getMeetings();
  };

  const truncate = (input) =>
    input?.length > 4 ? `${input.substring(0, 40)}...` : input;

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="py-8 w-fit min-h-screen">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3">
        <Link
          to="/dashboard/meeting/add"
          className=" bg-sky-900 hover:bg-sky-800 rounded-xl p-3 text-white">
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
        <div className="py-3 sm:px-10 px-0">
          <span className="flex flex-row items-center gap-2 p-3 rounded-xl text-white">
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
          </tr>
        </thead>
        <tbody>
          {meetings
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
                    to={`/dashboard/meeting/edit/${meeting.id}`}
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
                        deleteMeetings(meeting.id);
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
