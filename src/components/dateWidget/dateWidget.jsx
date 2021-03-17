import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DATE_CONFIG } from '../../utils/constants';
import './dateWidget.scss';

const DateWidget = () => {
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const countryConfig = useSelector((rootState) => rootState.control.countryConfig);

  const toOffsetDate = useCallback((offset) => {
    const date = new Date(Date.now() - (offset * 60 * 1000));
    const month = DATE_CONFIG[lang].month[date.getUTCMonth()];
    const weekday = DATE_CONFIG[lang].weekday[date.getUTCDay()];
    const day = date.getUTCDate();
    const year = date.getFullYear();
    const hrs = date.getUTCHours().toString().padStart(2, '0');
    const mins = date.getUTCMinutes().toString().padStart(2, '0');
    const secs = date.getUTCSeconds().toString().padStart(2, '0');
    return {
      year, month, weekday, day, hrs, mins, secs,
    };
  }, [lang]);

  const [time, setTime] = useState(toOffsetDate(countryConfig.timeDifference));

  const tick = useCallback(() => {
    setTime(toOffsetDate(countryConfig.timeDifference));
  }, [countryConfig, toOffsetDate]);

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [tick]);

  const {
    day, hrs, mins, month, secs, weekday, year,
  } = time;

  return (
    <div className="country-page__widget_time">
      <p className="time">
        {hrs}
        :
        {mins}
        :
        {secs}
      </p>
      <p className="date">
        <span className="date__weekday">
          {weekday}
          ,
        </span>
        <span className="date__whole-date">
          {day}
            &nbsp;
          {month}
            &nbsp;
          {year}
        </span>
      </p>
    </div>
  );
};

export default DateWidget;
