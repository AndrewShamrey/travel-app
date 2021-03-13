import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryConfig, setPlacesByCountry } from '../../actions/control';
import FetchData from '../../utils/fetchData';
import { MAIN_PLACES } from '../../utils/constants';
import './card.css';

const Card = ({ item, index }) => {
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
    <div key={item} country={item} className="country-card" onClick={onClickCardHandler}>
      <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
      <div className="country-card__title">
        {countryConfig.info[lang].name}
      </div>
    </div>
  );
};

export default Card;
