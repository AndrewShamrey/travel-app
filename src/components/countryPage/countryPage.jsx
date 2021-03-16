import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FetchData from '../../utils/fetchData';
import { setCountryConfig, setPlacesByCountry } from '../../actions/control';
import DateWidget from '../dateWidget/dateWidget';
import { CAPITAL_TITLES } from '../../utils/constants';
import PageImageGallery from '../imageGallery/imageGallery';
import Video from '../video/Video';
import CountryMap from '../map/Map';
import weatherWidget from '../../assets/images/weather-widget.png';
import exchangeRatesWidget from '../../assets/images/exchange-rates-widget.png';
import earthIcon from '../../assets/images/earth.png';
import './countryPage.scss';

const CountryPage = () => {
  const { country } = useParams();
  const [isLoader, setIsLoader] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');

    const redirect = () => {
      history.push('/*');
    };

    fetchClass.getCountry(country)
      .then(([countryConfig]) => {
        if (!countryConfig) {
          throw new Error('Page not found');
        }
        dispatch(setCountryConfig(countryConfig));
      })
      .then(() => {
        fetchClass.getPlacesByCountry(country)
          .then((places) => {
            dispatch(setPlacesByCountry(places));
            setIsLoader(false);
          });
      })
      .catch((err) => {
        console.log('Error - ', err);
        redirect();
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countryData = useSelector((rootState) => rootState.control.countryConfig);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const { name, capital, description } = countryData.info[currentLanguage];
  const { mainPlace, video } = countryData;

  if (isLoader) {
    return (
      <div className="country-page__loader">
        <img
          className="country-page__loader-icon"
          src={earthIcon}
          alt="earth-icon"
        />
      </div>
    );
  }

  return (
    <main className="country-page">
      <div className="country-page__wrapper">
        <div className="country-page__info">
          <div className="country-page__country">
            <h2 className="country-page__name">{name}</h2>
            <p className="country-page__capital">
              {CAPITAL_TITLES[currentLanguage]}
              :&nbsp;
              {capital}
            </p>
          </div>
          <img
            className="country-page__image"
            src={mainPlace.image}
            alt={mainPlace[currentLanguage].name}
          />
          <p className="country-page__description">{description}</p>
          <div className="country-page__widgets">
            <DateWidget />
            <div className="country-page__widget">
              <img src={weatherWidget} alt="Weather widget" />
            </div>
            <div className="country-page__widget">
              <img src={exchangeRatesWidget} alt="Exchange rates widget" />
            </div>
          </div>
          <PageImageGallery />
          <div className="country-page__video">
            <Video
              src={`${video}`}
              poster={mainPlace.image}
            />
          </div>
        </div>
      </div>
      <div className="country-page__map">
        <CountryMap />
      </div>
    </main>
  );
};

export default CountryPage;
