import React, { useState, useEffect, useMemo } from "react";
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
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:5000/report");
  //         setData(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   const filteredData = data.filter(
  //     (entry) =>
  //       entry.status === "Sedang UAT" ||
  //       entry.status === "Sedang SIT" ||
  //       entry.status === "Dokumen Sedang Dilengkapi" ||
  //       entry.status === "Akan UAT & SIT" ||
  //       entry.status === "Complete"
  //   );

  //   let complete = 0;
  //   let sedangUat = 0;
  //   let sedangSit = 0;
  //   let dokumenSedangDilengkapi = 0;
  //   let akanUatSit = 0;

  //   filteredData.forEach((report) => {
  //     if (report.status === "Sedang UAT") {
  //       sedangUat += 1;
  //     } else if (report.status === "Sedang SIT") {
  //       sedangSit += 1;
  //     } else if (report.status === "Dokumen Sedang Dilengkapi") {
  //       dokumenSedangDilengkapi += 1;
  //     } else if (report.status === "Akan UAT & SIT") {
  //       akanUatSit += 1;
  //     } else if (report.status === "Complete") {
  //       complete += 1;
  //     }
  //   });

  //   const finalData = useMemo(
  //     () => [
  //       { name: "Completed", value: complete },
  //       { name: "Sedang UAT", value: sedangUat },
  //       { name: "Sedang SIT", value: sedangSit },
  //       { name: "Dokumen Sedang Dilengkapi", value: dokumenSedangDilengkapi },
  //       { name: "Akan UAT & SIT", value: akanUatSit },
  //     ],
  //     [complete, sedangUat, sedangSit, dokumenSedangDilengkapi, akanUatSit]
  //   );

  //   return (
  //     <BarChart
  //       width={300}
  //       height={250}
  //       data={data}
  //       margin={{
  //         top: 0,
  //         right: 0,
  //         left: 0,
  //         bottom: 0,
  //       }}>
  //       <CartesianGrid strokeDasharray="3 3" />
  //       <XAxis dataKey="status" />
  //       <YAxis />
  //       <Tooltip />
  //       {data.map((report, index) => (
  //         <Bar name={report.status} fill="#2384d8" />
  //       ))}
  //     </BarChart>
  //   );
  // };

  // export default CompleteReportChart;

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
        entry.status === "Akan UAT & SIT" ||
        entry.status === "Complete"
    );
  // const filteredData = data.map((entry) => {
  //   if (entry.status === "Complete" || entry.status === "In Progress") {
  //     return entry;
  //   }
  // });

  const getLength = (entry) => {

    const grouped = data.reduce((acc, item) => {
      acc[item.status] = acc[item.status] || [];
      acc[item.status].push(item);
      return acc;
    }, {});

 
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
