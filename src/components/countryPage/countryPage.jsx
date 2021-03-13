import { useSelector } from 'react-redux';
import dateWidget from '../../assets/images/date-widget.png';
import weatherWidget from '../../assets/images/weather-widget.png';
import exchangeRatesWidget from '../../assets/images/exchange-rates-widget.png';
import mapImg from '../../assets/images/map.png';
import './countryPage.scss';

const CountryPage = () => {
  const countryData = useSelector((rootState) => rootState.control.countryConfig);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const { name, capital, description } = countryData.info[currentLanguage];
  const { mainPlace } = countryData;

  return (
    <main className="country-page">
      <div className="country-page__wrapper">
        <div className="country-page__info">
          <div className="country-page__country">
            <h2 className="country-page__name">{name}</h2>
            <p className="country-page__capital">{capital}</p>
          </div>
          <img
            className="country-page__image"
            src={mainPlace.image}
            alt={mainPlace[currentLanguage].name}
          />
          <p className="country-page__description">{description}</p>
          <div className="country-page__widgets">
            <div className="country-page__widget">
              <img src={dateWidget} alt="Date widget" />
            </div>
            <div className="country-page__widget">
              <img src={weatherWidget} alt="Weather widget" />
            </div>
            <div className="country-page__widget">
              <img src={exchangeRatesWidget} alt="Exchange rates widget" />
            </div>
          </div>
          <div className="country-page__gallery">
            <img
              className="country-page__image"
              src={mainPlace.image}
              alt="example"
            />
          </div>
          <div className="country-page__video">
            <img
              className="country-page__image"
              src={mainPlace.image}
              alt="example"
            />
          </div>
        </div>
      </div>
      <div className="country-page__map">
        <img src={mapImg} alt="map example" />
      </div>
    </main>
  );
};

export default CountryPage;
