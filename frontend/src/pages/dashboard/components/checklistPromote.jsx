import React, { useNavigate } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import ChecklistPromoteList from "./checklistPromoteList";
import { Link } from "react-router-dom";
import { ChartBarIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function ChecklistPromote() {
  const category = [
    {
      name: "All",
      icon: <DocumentTextIcon />,
      path: "/dashboard/report/#",
    },
    {
      name: "POK Promote",
      icon: <DocumentTextIcon />,
      path: "/report/pok",
    },
    {
      name: "Hasil Promote",
      icon: <DocumentTextIcon />,
      path: "/report/hasil-promote",
    },
    {
      name: "Checklist Promote",
      icon: <DocumentTextIcon />,
      path: "/report/checklist-promote",
    },
    {
      name: "Others",
      icon: <DocumentTextIcon />,
      path: "/report/others",
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
        <div className="py-5 text-white font-bold">Report Category</div>
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
        <div className="divider sm:px-20 px-32 sm:py-3 py-0" />
        <ChecklistPromoteList />
      </div>
    </div>
  );
}
