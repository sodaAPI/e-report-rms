import * as XLSX from "xlsx";
import axios from "axios";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DataToExcel() {
  async function downloadExcel() {
    /* fetch the data from the API using axios */
    const response = await axios.get("http://localhost:5000/report");
    const data = response.data;

    /* convert the data to an array of arrays */
    const dataAsArray = data
      .filter((reports) => reports.report_type !== "POK Promote")
      .filter((reports) => reports.report_type !== "Hasil Promote")
      .filter((reports) => reports.report_type !== "Checklist Promote")
      .map((report) => [
        report.id,
        report.uuid,
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
        report.keterangan_project,
        report.status,
        report.nolap_promote,
        report.tanggal_promote,
        report.week_eksekusi,
        report.risk_summary,
        report.source_file,
        report.report_type,
        report.userId,
        report.createdAt,
        report.updatedAt,
      ]);
  
      /* add the header row */
      dataAsArray.unshift([
        "ID",
        "UUID",
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
        "QA",
        "SA",
        "CMT",
        "Dependensi",
        "Keterangan Project",
        "Status",
        "No Lap Promote",
        "Tanggal Promote",
        "Week Eksekusi",
        "Risk Summary",
        "Report Type",
        "By",
        "Created At",
        "Updated At",
      ]);
  
      /* create a workbook and add the data */
      const ws = XLSX.utils.aoa_to_sheet(dataAsArray);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "E-Report");

    const now = new Date();
    const dateString = `E-Report Others ${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}.xlsx`;

    /* generate the Excel file and trigger a download */
    XLSX.writeFile(wb, dateString);
  }

  return (
    <div>
      <button
        className="flex flex-row gap-2 bg-sky-700 hover:bg-sky-600 p-3 text-white rounded-xl"
        onClick={downloadExcel}>
        <ArrowDownTrayIcon className="w-5 h-5" /> Download Others Promote Report file
      </button>
    </div>
  );
}
