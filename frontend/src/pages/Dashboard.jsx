import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Dashboards from "./dashboard/Dashboards";
import Announcement from "./dashboard/components/Announcement";

// const log = 0;
// const checkLog = () => {
//   if (log >= 1) {
//     return
//   } else {
//     log++;
//     return <Announcement />;
//   }
// };

export default function Dashboard() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className=" w-full p-4">
        <Header />
        <Announcement />
        {/* Page Header */}
        <div className="flex mt-5 bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard" className="hover:text-white  font-bold">
              <span className="mx-1"> Dashboard </span>
            </Link>
          </p>
        </div>
        <Dashboards />
      </div>
    </div>
  );
}
