import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import weatherAPI from '../../utils/weatherAPI';
import { WEATHER_VALUES } from '../../utils/vocabulary';
import Spinner from '../spinner/spinner';
import './weatherWidget.scss';

const ExchangeRateWidget = () => {
  const [weather, setWeather] = useState({});
  const [isLoader, setIsLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const city = useSelector((rootState) => rootState.control.countryConfig.info.en.capital);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const content = WEATHER_VALUES[currentLanguage];

  const getWeather = useCallback(async () => {
    try {
      setIsLoader(() => true);
      const data = await weatherAPI.get(city, currentLanguage);

      setWeather(data);
      setIsLoader(() => false);
    } catch (e) {
      setIsLoader(() => false);
      setIsError(() => true);
    }
  }, [city, currentLanguage]);

  const handleOnClick = () => {
    setIsError(() => false);
    getWeather();
  };

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  const {
    icon, description, temp, humidity, wind,
  } = weather;

  return (
    <div className="weather-widget">
      <div className="weather-widget__content">
        {isLoader && (
          <Spinner additionalClassName="weather-widget__spinner" />
        )}
        {isError && (
          <>
            <button
              className="weather-widget__reload-btn"
              type="button"
              onClick={handleOnClick}
            >
              <i className="fas fa-sync-alt" />
            </button>
            <p>{content.error}</p>
          </>
        )}
        {!isError && !isLoader && (
          <>
            <div className="weather-widget__main">
              <p className="weather-widget__temperature">{`${temp.toFixed(1)} °C`}</p>
              <i className={`weather-widget__icon owf owf-${icon}`} />
            </div>
            <p className="weather-widget__description">{description}</p>
            <p className="weather-widget__wind">{`${content.wind}: ${wind} ${content.ms}`}</p>
            <p className="weather-widget__humidity">{`${content.humidity}: ${humidity}%`}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ExchangeRateWidget;
