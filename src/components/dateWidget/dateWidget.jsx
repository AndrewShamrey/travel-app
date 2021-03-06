import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import "./dateWidget.css";

const DateWidget = () => {
  const timeDifference = useSelector((rootState) => rootState.control.timeDifference);
  const [time, setTime] = useState(toOffsetDate(timeDifference));

  const tick = useCallback(() => {
    setTime(toOffsetDate(timeDifference))
  }, [timeDifference]);

  function toOffsetDate (offset) {
    const date = new Date(Date.now() - (offset * 60 * 1000));
    var hrs = date.getUTCHours().toString().padStart(2, "0");
    var mins = date.getUTCMinutes().toString().padStart(2, "0");
    var secs = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [tick]);

  return (
    <p className="App-clock">The time is {time}.</p>
  );
} 

export default DateWidget;
