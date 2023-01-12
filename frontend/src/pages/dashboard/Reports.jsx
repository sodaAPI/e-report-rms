import React, { useNavigate } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ReportList from "./components/reportList";
import { Link } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function Reports() {
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
        <ReportList />
      </div>
    </div>
  );
}
