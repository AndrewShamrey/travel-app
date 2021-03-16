import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { exchangeRatesAPI } from '../../utils/exchangeAPI';

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

  return (
    <div>
      <p>Exchange Rates</p>
      <ul>
        <li>
          <span>EUR</span>
          <span>{rates.EUR || 'Not found'}</span>
        </li>
        <li>
          <span>USD</span>
          <span>{rates.USD || 'Not found'}</span>
        </li>
        <li>
          <span>BYN</span>
          <span>{rates.BYN || 'Not found'}</span>
        </li>
      </ul>
    </div>
  );
};

export default ExchangeRateWidget;
