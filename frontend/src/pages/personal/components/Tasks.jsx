import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowsRightLeftIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const statusList = ["Uncompleted", "Completed"];

export default function Tasks() {
  const [value, onChange] = useState(new Date());
  const [tasks, setTask] = useState([]);
  const [status, setStatus] = useState(statusList[0]);
  const { id } = useParams();
  const history = useNavigate();
  const navigate = useNavigate();

  useEffect(() => {
    getTasks();
    getTaskById();
  }, []);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:5000/task");
    setTask(response.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/task/${id}`);
    getTasks();
  };

  const checkStatus = (status) => {
    if (status === statusList[0]) {
      return "Completed";
    } else {
      return "Uncompleted";
    }
  };

  const updateStatus = async (id) => {
    const response = await axios.get(`http://localhost:5000/task/${id}`);
    const status = checkStatus(response.data.status);
    await axios.patch(`http://localhost:5000/task/${id}`, { status });
    window.alert("Task Updated Successfully");
    getTasks();
  };

  const getTaskById = async () => {
    const response = await axios.get(`http://localhost:5000/task/${id}`);
    setStatus(response.data.status);
  };

  const category = [
    {
      name: "All",
      icon: <DocumentIcon />,
      path: "/dashboard/task",
    },
    {
      name: "Completed",
      icon: <DocumentIcon />,
      path: "/task/completed",
    },
    {
      name: "Uncompleted",
      icon: <DocumentIcon />,
      path: "/task/uncompleted",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
    //User
    const { user } = useSelector((state) => state.auth);

  return (
    <section>
      <div className="flex sm:flex-row flex-col gap-5 py-8">
        <div className="flex flex-col w-full">
          <div className="px-5 text-xl text-white"></div>
          <div className="flex sm:flex-row flex-col justify-center items-center rounded-xl bg-slate-800">
            <div className="flex flex-col items-center w-9/12">
              <a className="flex flex-col justify-center items-center gap-2 sm:w-2/3  w-3/4 py-1 my-2 rounded-xl text-white font-bold">
                <span className="flex flex-col justify-center items-center text-lg">
                  Task Total
                  <span className="text-md">{tasks.length}</span>
                </span>
              </a>
            </div>
            <div class="xs:hidden divider-horizontal divider py-5">{""}</div>
            <div className="sm:hidden divider mx-20"></div>
            <div className="flex flex-col items-center w-9/12 sm:pt-0 pt-5">
              <a className="flex flex-col justify-center items-center gap-2 sm:w-2/3 w-3/4 py-1 my-2 rounded-xl text-white font-bold">
                <span className="flex flex-col justify-center items-center text-lg">
                  Task Completed{" "}
                  <span className="text-md">
                    {
                      tasks.filter((tasks) => tasks.status === "Completed")
                        .length
                    }
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="flex mt-5 p-2 bg-slate-800 rounded-xl sm:flex-row flex-col gap-5 sm:w-full w-48 sm:justify-start justify-center">
            {category.map((val, index) => {
              return (
                <Link
                  key={index}
                  className="flex flex-row outline outline-1 outline-slate-700 hover:bg-slate-700 rounded-lg py-1 text-white"
                  Link
                  to={val.path}>
                  <div className="flex flex-row gap-2 px-5  items-center">
                    <div className="w-5">{val.icon}</div>
                    <div>{val.name}</div>
                  </div>
                  <div className="divider divider-vertical divide-rose-400"></div>
                </Link>
              );
            })}
          </div>
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3 mt-5">
            <Link
              to="/dashboard/task/add"
              className=" bg-sky-900 hover:bg-sky-800 rounded-xl p-3 text-white">
              Add New Task
            </Link>
            <input
              className="input bg-white rounded-xl e p-3 text-gray-800"
              type="text"
              placeholder="Search Tasks..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <table className="table-compact text-center bg-slate-800 rounded-2xl text-white mt-7">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>By</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks
                .filter(
                  (task) =>
                    new RegExp(searchTerm, "i").test(task.name) ||
                    new RegExp(searchTerm, "i").test(task.description) ||
                    new RegExp(searchTerm, "i").test(task.by_user) ||
                    new RegExp(searchTerm, "i").test(task.id) ||
                    new RegExp(searchTerm, "i").test(task.status) ||
                    new RegExp(searchTerm, "i").test(task.deadline)
                )
                .sort((a, b) => (a.deadline < b.deadline ? 1 : -1))
                .map((task, index) => (
                  <tr key={index}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.status}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.user.name}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to update this task?"
                            )
                          )
                            updateStatus(task.id);
                        }}
                        className="flex flex-row items-center gap-2 outline outline-2 outline-slate-400 hover:bg-slate-600 hover:outline-none p-2 rounded-lg text-white">
                        <ArrowsRightLeftIcon className="w-4 h-4" /> Status
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/dashboard/task/edit/${task.id}`}
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
                            deleteTask(task.id);
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

        <div className="flex flex-col items-center px-5 sm:w-1/4 w-full bg-slate-800 rounded-xl py-2">
          <span className="text-lg text-white ">Calendar</span>
          <Calendar
            className="rounded-xl mt-3 bg-sky-900 border-none bg-opacity-10 mb-3"
            calendarType="US"
            onChange={onChange}
            value={value}
          />
          <div className="divider"></div>
          <span className="text-lg text-white pb-2">Task To Do</span>
          <table className="table-compact table-zebra w-full bg-slate-800 rounded-2xl text-white">
            <thead>
              <tr>
                <th>Task</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {tasks
                .filter((tasks) => tasks.status === "Uncompleted")
                .sort((a, b) => (a.deadline < b.deadline ? 1 : -1))
                .map((task, index) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.deadline}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
