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

const CompleteReportChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/report");
      setData(response.data);
    };

    fetchData();
  }, []);

  // Filter the data to only include entries with a status of "Complete" or "In Progress"
  const filteredData = data.map((entry) => {
    if (entry.status === "Complete" || entry.status === "In Progress") {
      return entry;
    }
  }).slice(2,4 ); // Only include the first two entries

  const getLength = (entry) => {
    // Group the data by status
    const grouped = data.reduce((acc, item) => {
      acc[item.status] = acc[item.status] || [];
      acc[item.status].push(item);
      return acc;
    }, {});

    // Return the length of the status group
    return grouped[entry.status].length;
  };

  return (
    <BarChart
      width={300}
      height={250}
      data={filteredData}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Bar dataKey={getLength} name="Report" fill="#2384d8" />
    </BarChart>
  );
};



export default CompleteReportChart;
