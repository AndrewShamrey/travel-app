import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryConfig } from '../../actions/control';
import fetchData from '../../utils/fetchData';
import './card.css';

const Card = () => {
  const dispatch = useDispatch();
  const currentCountry = useSelector((rootState) => rootState.control.currentCountry);
  const currentLang = useSelector((rootState) => rootState.control.currentLang);
  const timeDifference = useSelector((rootState) => rootState.control.timeDifference);
  const fullName = useSelector((rootState) => rootState.control.fullName);
  const capital = useSelector((rootState) => rootState.control.capital);
  const description = useSelector((rootState) => rootState.control.description);

  const onClickCardHandler = useCallback((e) => {
    const clickedCountry = e.target.getAttribute('country');
    fetchData('GET', 'countries', currentLang, clickedCountry)
      .then((response) => response.json())
      .then((data) => {
        const country = data[0];
        dispatch(setCountryConfig(country));
      })
      .catch((err) => console.log(err));
  }, [currentLang, dispatch]);

  return (
    <div>
      <div className="current-country">
        <p>
          name -
          {fullName}
        </p>
        <p>
          ShortName -
          {currentCountry}
        </p>
        <p>
          capital -
          {capital}
        </p>
        <p>
          timeDifference -
          {timeDifference}
        </p>
        <p className="description">
          description -
          {description}
        </p>
      </div>
      <div className="cards-cont">
        <button
          className="country-card-button"
          type="button"
          onClick={onClickCardHandler}
        >
          <p country="Vietnam" className="country-card">Vietnam</p>
        </button>
        <button
          className="country-card-button"
          type="button"
          onClick={onClickCardHandler}
        >
          <p country="Denmark" className="country-card">Denmark</p>
        </button>
        <button
          className="country-card-button"
          type="button"
          onClick={onClickCardHandler}
        >
          <p country="Japan" className="country-card">Japan</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
