import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Preferences from "./components/Preferences";

export default function Preference() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full p-4">
        <Header />
        {/* Page Header */}
        <div className="flex mt-5 w-full bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard/preferences/#" className="hover:text-white">
              <span className="mx-1"> Settings </span>
            </Link>
            /
            <Link
              to="/dashboard/preferences/"
              className="hover:text-white font-bold">
              <span className="flex flex-row mx-1 gap-1 items-center">
                <Cog6ToothIcon className="w-5 h-5" /> Preferences
              </span>
            </Link>
          </p>
        </div>
        <Preferences />
      </div>
    </div>
  );
}
