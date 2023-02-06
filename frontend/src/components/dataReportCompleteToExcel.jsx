import * as XLSX from "xlsx";
import axios from "axios";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

export default function DataToExcel() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  async function downloadExcel() {
    /* fetch the data from the API using axios */
    const response = await axios.get("http://localhost:5000/report");
    const data = response.data;

    /* convert the data to an array of arrays */
    const dataAsArray = data
      .filter((report) => report.status === "Complete")
      .map((report, index) => [
        index,
        report.project_code,
        report.new_existing,
        report.ip,
        report.nopcr_ir,
        report.nama,
        report.user_division,
        report.core_noncore,
        report.detail_deploy,
        report.changes,
        report.programmer,
        report.bp,
        report.pm,
        report.qa,
        report.sa,
        report.cmt,
        report.dependensi,
        report.status,
        report.nolap_promote,
        report.tanggal_promote,
        report.week_eksekusi,
        report.week_request,
        report.risk_summary,
        report.user.name,
        report.createdAt,
        report.updatedAt,
      ]);

    /* add the header row */
    dataAsArray.unshift([
      "No",
      "Project Code",
      "New / Existing",
      "IP",
      "No PCR/IR",
      "Nama",
      "User Division",
      "Core / Non Core",
      "Detail Deploy",
      "Changes",
      "Programmer",
      "BP",
      "PM",
      "QA",
      "SA",
      "CMT",
      "Dependensi",
      "Status",
      "No Lap Promote",
      "Tanggal Promote",
      "Week Eksekusi",
      "Week Request",
      "Risk Summary",
      "By",
      "Created At",
      "Updated At",
    ]);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Asia/Bangkok",
    };

    const formattedDate = date.toLocaleString("en-US", options);

    /* create a workbook and add the data */
    const ws = XLSX.utils.aoa_to_sheet(dataAsArray);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "E-Report Complete");

    const dateString = `Complete E-Report ${formattedDate}.xlsx`;

    /* generate the Excel file and trigger a download */
    XLSX.writeFile(wb, dateString);
  }

  return (
    <div>
      <button
        className="flex flex-row gap-2 bg-sky-700 hover:bg-sky-600 p-3 text-white rounded-xl"
        onClick={downloadExcel}>
        <ArrowDownTrayIcon className="w-5 h-5" /> Download Complete Promote
        Report file
      </button>
    </div>
  );
}
