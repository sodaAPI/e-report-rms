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
      .filter((report) => report.side_promote === "POK Promote")
      .map((report) => [
        report.id,
        report.uuid,
        report.project_code,
        report.promote_name,
        report.promote_status,
        report.promote_pic,
        report.promote_desc,
        report.src_file,
        report.changes,
        report.promote_date,
        report.execute_week,
        report.request_week,
        report.side_promote,
        report.edited_by,
        report.createdAt,
        report.updatedAt,
      ]);

    /* add the header row */
    dataAsArray.unshift([
      "ID",
      "UUID",
      "Project Code",
      "Promote Name",
      "Promote Status",
      "Promote PIC",
      "Promote Description",
      "Source File",
      "Changes",
      "Promote Date",
      "Execute Week",
      "Request Week",
      "Side Promote",
      "Edited By",
      "Created At",
      "Updated At",
    ]);

    /* create a workbook and add the data */
    const ws = XLSX.utils.aoa_to_sheet(dataAsArray);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "E-Report");

    const now = new Date();
    const dateString = `E-Report POK Promote ${now.getFullYear()}-${
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
        <ArrowDownTrayIcon className="w-5 h-5" /> Download Report file
      </button>
    </div>
  );
}
