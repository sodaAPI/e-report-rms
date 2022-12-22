import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import UserList from "./components/userList";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Users() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="w-full p-4">
        <Header/>
        {/* Page Header */}
        <div className="flex mt-5 w-full bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard" className="hover:text-white">
              <span className="mx-1"> Dashboard </span>
            </Link>
            /
            <Link to="/dashboard/user" className="hover:text-white ">
              <span className="flex flex-row mx-1 gap-1 items-center font-bold">
                <UserIcon className="w-5 h-5" /> Users
              </span>
            </Link>
          </p>
        </div>
        <UserList />
      </div>
    </div>
    
  );
}
