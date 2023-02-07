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

  const filteredData = data.filter(
    (task) => task.status === "Completed" || task.status === "Uncompleted"
  );

  let completed = 0;
  let uncompleted = 0;

  filteredData.forEach((task) => {
    if (task.status === "Completed") {
      completed += 1;
    } else if (task.status === "Uncompleted") {
      uncompleted += 1;
    }
  });

  const finalData = [
    { name: "Completed", value: completed, fill: "#ffe28a" },
    { name: "Uncompleted", value: uncompleted, fill: "#B3CFF9" },
  ];

  return (
    <PieChart width={300} height={250}>
      <Tooltip />
      <Legend
        formatter={(value) =>
          value === "Completed" ? "Completed" : "Uncompleted"
        }
      /> 

      <Pie
        data={finalData}
        dataKey="value"
        nameKey="name"
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
