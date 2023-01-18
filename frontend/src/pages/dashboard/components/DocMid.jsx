import React from "react";
import Sidebar from "../../../components/Sidebar";
import AddDocMid from "../../../components/addDocMid";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function DocMids() {
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
            <Link to="/dashboard/doc" className="hover:text-white">
              <span className="flex flex-row mx-1 gap-1 items-center">
                <DocumentTextIcon className="w-5 h-5" /> Document Middleware
              </span>
            </Link>
            <Link to="/dashboard/profile/edit/:id">
              <span className="hover:text-white">
                / <b>Generate</b>
              </span>
            </Link>
          </p>
        </div>
        <AddDocMid />
      </div>
    </div>
  );
}
