import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { exchangeRatesAPI } from '../../utils/exchangeAPI';
import './exchangeRatesWidget.scss';

const ExchangeRateWidget = () => {
  const currency = useSelector((rootState) => rootState.control.countryConfig.currency.code);
  const [rates, setRates] = useState({});

  const getExchangeRates = useCallback(async () => {
    try {
      const { EUR, USD, BYN } = await exchangeRatesAPI.get(currency);
      setRates({ EUR, USD, BYN });
    } catch (e) {
      console.log(e);
    }
  }, [currency]);

  useEffect(() => {
    getExchangeRates();
  }, [getExchangeRates]);

  console.log(rates);

  return (
    <div className="exchange-rates-widget">
      <p className="exchange-rates-widget__title">
        {`${currency} exchange rates`}
      </p>
      <ul className="exchange-rates-widget__list">
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
    </div>
  );
};

export default ExchangeRateWidget;
