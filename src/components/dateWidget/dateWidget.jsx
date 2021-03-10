import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { DATE_CONFIG } from "../../utils/constants";
import "./dateWidget.css";

const DateWidget = () => {
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const countryConfig = useSelector((rootState) => rootState.control.countryConfig);

  const toOffsetDate = useCallback((offset) => {
    const date = new Date(Date.now() - (offset * 60 * 1000));
    const month = DATE_CONFIG[lang].month[date.getMonth()];
    const weekday = DATE_CONFIG[lang].weekday[date.getDay()];
    const day = date.getDate();
    const hrs = date.getUTCHours().toString().padStart(2, "0");
    const mins = date.getUTCMinutes().toString().padStart(2, "0");
    const secs = date.getUTCSeconds().toString().padStart(2, "0");
    return { month, weekday, day, hrs, mins, secs };
  }, [lang]);

  const [time, setTime] = useState(toOffsetDate(countryConfig.timeDifference));

  const tick = useCallback(() => {
    setTime(toOffsetDate(countryConfig.timeDifference))
  }, [countryConfig, toOffsetDate]);


  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [tick]);

  return (
    <p className="App-clock">{JSON.stringify(time)}</p>
  );
} 

export default DateWidget;
