import React from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import AddTask from "./addTask";

export default function AddTasks() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full p-4">
        <Header />
        {/* Page Header */}
        <div className="flex mt-5 w-full bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard/task/#" className="hover:text-white">
              <span className="mx-1"> Personal </span>
            </Link>
            /
            <Link to="/dashboard/task/">
              <span className="flex flex-row mx-1 gap-1 items-center hover:text-white">
                <BriefcaseIcon className="w-5 h-5" /> Task
              </span>
            </Link>
            <Link to="/dashboard/task/add">
              <span className="hover:text-white">
                / <b>Add</b>
              </span>
            </Link>
          </p>
        </div>
        <AddTask />
      </div>
    </div>
  );
}
