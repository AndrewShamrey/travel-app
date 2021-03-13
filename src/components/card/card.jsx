import { useDispatch, useSelector } from 'react-redux';
import { setCountryConfig, setPlacesByCountry } from '../../actions/control';
import FetchData from '../../utils/fetchData';
import { ALL_COUNTRIES, MAIN_PLACES } from '../../utils/constants';
import './card.css';

const Card = () => {
  const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');

  const dispatch = useDispatch();
  const countryConfig = useSelector((rootState) => rootState.control.countryConfig);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);

  const onClickCardHandler = (e) => {
    const clickedCountry = e.target.closest('.country-card').getAttribute('country');
    fetchClass.getCountry(clickedCountry)
      .then(([country]) => {
        dispatch(setCountryConfig(country));
      })
      .then(() => {
        fetchClass.getPlacesByCountry(clickedCountry)
          .then((places) => {
            dispatch(setPlacesByCountry(places));
          });
      })
      .catch((err) => console.log('Error - ', err));
  };

  return (
    <div>
      <div className="current-country">
        <p>
          name -
          {countryConfig.info[lang].name}
        </p>
        <p>
          ShortName -
          {countryConfig.shortName}
        </p>
        <p>
          capital -
          {countryConfig.info[lang].capital}
        </p>
        <p>
          timeDifference -
          {countryConfig.timeDifference}
        </p>
        <p>
          currentPlaces -
          {currentPlaces && JSON.stringify(currentPlaces.map((item) => item.info[lang].name))}
        </p>
        <p className="description">
          description -
          {countryConfig.info[lang].description}
        </p>
      </div>
      <div className="cards-cont">
        {ALL_COUNTRIES.map((item, index) => (
          <div key={item} country={item} className="country-card" onClick={onClickCardHandler}>
            <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
