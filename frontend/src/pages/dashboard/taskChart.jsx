import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const TaskChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/task");
      setData(response.data);
    };

    fetchData();
  }, []);

  // Filter the data to only include entries with a promote_status of "Complete" or "In Progress"
  const filteredData = data
    .filter((entry) => entry.status == "Completed" || "Uncompleted")
    .slice(0, 2); // Only include the first two entries

  const getLength = (entry) => {
    // Group the data by promote_status
    const grouped = data.reduce((acc, item) => {
      acc[item.status] = acc[item.status] || [];
      acc[item.status].push(item.status);
      console.log(item);
      return acc;
    }, {});

    // Return the length of the promote_status group
    return grouped[entry.status].length;
  };

  return (
    <PieChart width={300} height={250}>
      <Tooltip />
      <Legend
        formatter={(value) =>
          value === "Uncompleted" ? "Uncompleted" : "Completed"
        }
      />

      <Pie
        data={filteredData}
        dataKey={getLength}
        nameKey="status"
        name="status"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        fill="#02a34a"
        label
      />
    </PieChart>
  );
};

export default TaskChart;
