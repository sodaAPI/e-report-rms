import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fi } from "date-fns/locale";

const CompleteReportChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/report");
      setData(response.data);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (entry) =>
      entry.status === "Sedang UAT" ||
      entry.status === "Sedang SIT" ||
      entry.status === "Dokumen Sedang Dilengkapi" ||
      entry.status === "Akan SIT dan UAT" ||
      entry.status === "Complete"
  );

  let complete = 0;
  let sedangUat = 0;
  let sedangSit = 0;
  let dokumenSedangDilengkapi = 0;
  let akanUatSit = 0;

  filteredData.forEach((report) => {
    if (report.status === "Akan SIT dan UAT") {
      akanUatSit += 1;
    } else if (report.status === "Sedang SIT") {
      sedangSit += 1;
    } else if (report.status === "Dokumen Sedang Dilengkapi") {
      dokumenSedangDilengkapi += 1;
    } else if (report.status === "Complete") {
      complete += 1;
    } else if (report.status === "Sedang UAT") {
      sedangUat += 1;
    }
  });

  const finalData = [
    { name: "Complete", value: complete, fill: "#e1f7d5" },
    { name: "Sedang UAT", value: sedangUat, fill: "#ffbdbd" },
    { name: "Sedang SIT", value: sedangSit, fill: "#c9c9ff" },
    { name: "Akan SIT dan UAT", value: akanUatSit, fill: "#f1cbff" },
    {
      name: "Dokumen Sedang Dilengkapi",
      value: dokumenSedangDilengkapi,
      fill: "#ffffff",
    },
  ];

  return (
    <BarChart
      width={300}
      height={250}
      data={finalData}
      nameKey="name"
        name="status"
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
      <Legend formatter={finalData.forEach((report) => report.name)} />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Bar label  dataKey="value" name="Report" fill="#ffbdbd" />
    </BarChart>
  );
};

export default CompleteReportChart;
