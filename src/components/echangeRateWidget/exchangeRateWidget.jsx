import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import exchangeRatesAPI from '../../utils/exchangeRatesAPI';
import { EXCHANGE_RATE_VALUES } from '../../utils/constants';
import './exchangeRatesWidget.scss';

const ExchangeRateWidget = () => {
  const [rates, setRates] = useState({});
  const [isLoader, setIsLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const currency = useSelector((rootState) => rootState.control.countryConfig.currency.code);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const { title, error } = EXCHANGE_RATE_VALUES[currentLanguage];

  const getExchangeRates = useCallback(async () => {
    try {
      setIsLoader(() => true);
      const { EUR, USD, BYN } = await exchangeRatesAPI.get(currency);
      setRates({
        EUR: EUR.toFixed(5),
        USD: USD.toFixed(5),
        BYN: BYN.toFixed(5),
      });

      setIsLoader(() => false);
    } catch (e) {
      setIsLoader(() => false);
      setIsError(() => true);
    }
  }, [currency]);

  const handleOnClick = () => {
    setIsError(() => false);
    getExchangeRates();
  };

  useEffect(() => {
    getExchangeRates();
  }, [getExchangeRates]);

  return (
    <div className="exchange-rates-widget">
      <p className="exchange-rates-widget__title">
        {`${currency} ${title}`}
      </p>
      <div className="exchange-rates-widget__list">
        {isLoader && (
          <span className="exchange-rates-widget__spinner">
            <i className="fas fa-spinner" />
          </span>
        )}
        {isError && (
          <>
            <button
              className="exchange-rates-widget__reload-btn"
              type="button"
              onClick={handleOnClick}
            >
              <i className="fas fa-sync-alt" />
            </button>
            <p>{error}</p>
          </>
        )}
        {!isError && !isLoader && (
          <ul>
            <li className="exchange-rates-widget__list-item">
              <span className="exchange-rates-widget__currency">EUR</span>
              <span className="exchange-rates-widget__value">{rates.EUR || 'Not found'}</span>
            </li>
            <li className="exchange-rates-widget__list-item">
              <span className="exchange-rates-widget__currency">USD</span>
              <span className="exchange-rates-widget__value">{rates.USD || 'Not found'}</span>
            </li>
            <li className="exchange-rates-widget__list-item">
              <span className="exchange-rates-widget__currency">BYN</span>
              <span className="exchange-rates-widget__value">{rates.BYN || 'Not found'}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExchangeRateWidget;
