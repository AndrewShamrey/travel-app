import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryConfig } from '../../actions/control';
import fetchData from '../../utils/fetchData';
import { ALL_COUNTRIES, MAIN_PLACES } from '../../utils/constants.js';
import './card.css';

const Card = () => {
  const dispatch = useDispatch();
  const countryConfig = useSelector((rootState) => rootState.control.countryConfig);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);

  const onClickCardHandler = useCallback((e) => {
    const clickedCountry = e.target.getAttribute('country');
    fetchData('GET', 'countries', clickedCountry)
      .then((response) => response.json())
      .then((data) => {
        const country = data[0];
        dispatch(setCountryConfig(country));
    })
    .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div>
      <div className='current-country'>
        <p>name - {countryConfig.info[lang].name}</p>
        <p>ShortName - {countryConfig.shortName}</p>
        <p>capital - {countryConfig.info[lang].capital}</p>
        <p>timeDifference - {countryConfig.timeDifference}</p>
        <p className='description'>description - {countryConfig.info[lang].description}</p>
      </div>
      <div className='cards-cont'>
        {ALL_COUNTRIES.map((item, index) => {
          return <div key={index} country={item} className='country-card' onClick={onClickCardHandler}>
            <img src={MAIN_PLACES[index]} alt='place' className='country-card__image' />
          </div>
        })}
      </div>
    </div>
  );
};

export default Card;
