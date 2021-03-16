/* eslint-disable max-len */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Star from './star';
import './placesRating.scss';

function Star({ name }) {
  console.log('here');

  return (
    <i className={`fas fa-star ${name}`} />
  );
}

const PlacesRating = ({ idPlace }) => {
  const [currentRate, setCurrentRate] = useState([false, false, false, false, false]);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  const placeRate = currentPlaces[idPlace].rating;
  console.log(currentPlaces);
  console.log(currentPlaces[idPlace].info[lang].name, placeRate);

  useEffect(() => {
    setCurrentRate([false, false, false, false, false]);
  }, [idPlace]);

  useEffect(() => {
    for (let i = 1; i <= 5; i += 1) {
      const clickStates = [...currentRate];
      if (i <= placeRate) {
        clickStates[i - 1] = true;
      } else {
        clickStates[i - 1] = false;
      }
      setCurrentRate(clickStates);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeRate]);

  const ClickHandler = (e) => {
    const ind = e.target.id;
    console.log('click', ind);
    const clickStates = [...currentRate];
    for (let i = 0; i < 5; i += 1) {
      if (i <= ind) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setCurrentRate(clickStates);
  };

  const yellowStar = 'fas fa-star star yellow';
  const starGrey = 'far fa-star star yellow';

  return (
    <div className="country-page__gallery_rating">
      {/* {currentRate.forEach((star, ind) => (
        <i id={ind} className={star ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
      ))} */}
      <i id="0" className={currentRate[0] ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
      <i id="1" className={currentRate[1] ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
      <i id="2" className={currentRate[2] ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
      <i id="3" className={currentRate[3] ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
      <i id="4" className={currentRate[4] ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
      <button type="button" className="show-ratings">
        <i className="far fa-question-circle" />
      </button>
    </div>
  );
};

export default PlacesRating;
