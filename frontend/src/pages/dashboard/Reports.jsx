import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ReportList from "./components/reportList";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function Reports() {
  const status = [
    {
      id: 1,
      name: "All",
      icon: <DocumentTextIcon />,
      path: "/dashboard/report/#",
    },
    {
      id: 2,
      name: "Completed",
      icon: <CheckCircleIcon />,
      path: "/dashboard/report/completed",
    },
    {
      id: 3,
      name: "In Progress",
      icon: <XCircleIcon />,
      path: "/dashboard/report/in_progress",
    },
  ];
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full p-4">
        <Header />
        {/* Page Header */}
        <div className="flex mt-5 w-full bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard" className="hover:text-white">
              <span className="mx-1"> Dashboard </span>
            </Link>
            /
            <Link to="/dashboard/report" className="hover:text-white font-bold">
              <span className="flex flex-row mx-1 gap-1 items-center">
                <ChartBarIcon className="w-5 h-5" /> Reports
              </span>
            </Link>
          </p>
        </div>
        <div className="pt-5 text-white font-bold">Report Category</div>
        <div className="flex mt-5 p-2 bg-slate-800 rounded-xl sm:flex-row flex-col gap-5 sm:w-full w-48 sm:justify-start justify-center">
          {status.map((val) => {
            return (
              <Link
                key={val.id}
                className="flex flex-row outline outline-1 outline-slate-700 hover:bg-slate-700 rounded-lg py-1 text-white"
                Link
                to={val.path}>
                <div className="flex flex-row gap-2 px-5 items-center">
                  <div className="w-5">{val.icon}</div>
                  <div>{val.name}</div>
                </div>
                <div className="divider divider-vertical divide-rose-400"></div>
              </Link>
            );
          })}
        </div>
        <div className="divider sm:px-20 px-32 py-0" />
        <ReportList />
      </div>
    </div>
  );
}
