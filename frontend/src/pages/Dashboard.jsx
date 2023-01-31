import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Dashboards from "./dashboard/Dashboards";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import Announcement from "react-popup-announcement";
import Logo from "../image/menarabankbtn.jpg";

export default function Dashboard() {

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className=" w-full p-4">
        <Header />
        <Announcement
          title="Announcement"
          subtitle="Selamat datang di Bank BTN E-Report Management System."
          imageSource={Logo}
          daysToLive={1}
          closeIconSize={30}
          animateInDuration={1500}
          animateOutDuration={500}
        />

        {/* Page Header */}
        <div className="flex mt-5 bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard" className="hover:text-white  font-bold">
              <span className="flex flex-row mx-1 gap-1 items-center">
                <PresentationChartLineIcon className="w-5 h-5" /> Dashboard{" "}
              </span>
            </Link>
          </p>
        </div>
        <Dashboards />
      </div>
    </div>
  );
}
