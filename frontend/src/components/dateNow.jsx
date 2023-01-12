import React, { useState, useEffect } from "react";

function DateNow() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Bangkok",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  return <div className="text-white">{formattedDate}</div>;
}

export default DateNow;
