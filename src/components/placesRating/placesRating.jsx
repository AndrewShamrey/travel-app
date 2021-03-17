/* eslint-disable max-len */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPlacesByCountry } from '../../actions/control';
import FetchData from '../../utils/fetchData';
import RatingList from '../ratingList/ratingList';
import './placesRating.scss';

const PlacesRating = ({ idPlace }) => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const [isListShown, setIsListShown] = useState(false);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  const placeRate = currentPlaces[idPlace].rating.number;
  const [currentRate, setCurrentRate] = useState(placeRate);
  const placeVotes = currentPlaces[idPlace].rating.count;
  const placePersons = currentPlaces[idPlace].personsId;
  const currentPerson = useSelector((rootState) => rootState.control.currentPerson);
  const currPersonId = currentPerson._id;
  console.log(country);
  console.log(currentPerson, placePersons);
  console.log(currentPlaces[idPlace].info[lang].name, placeRate);

  useEffect(() => {
    setCurrentRate(placeRate);
  }, [idPlace, placeRate]);

  const ClickHandler = (e) => {
    const ind = e.target.id;
    console.log('click', ind);
    const newRate = +ind;

    const wholeRate = (placeRate + newRate) / (placeVotes + 1);
    const body = {
      rating: { number: wholeRate, count: placeVotes + 1 },
      personsId: placePersons.concat([{ id: currPersonId, rating: newRate }]),
    };
    const id = currentPlaces[idPlace]._id;

    const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');
    fetchClass.updatePlaceById(JSON.stringify(body), id)
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          setCurrentRate(newRate);
          fetchClass.getPlacesByCountry(country)
            .then((places) => {
              dispatch(setPlacesByCountry(places));
            })
            .catch((err) => console.log('Error - ', err));
        }
      })
      .catch((err) => console.log('Error - ', err));
  };

  const drawStars = (num) => {
    console.log('drawing', num);
    const yellowStar = 'fas fa-star star yellow';
    const starGrey = 'far fa-star star yellow';
    return (
      <i id={num} className={num <= currentRate ? yellowStar : starGrey} onClick={ClickHandler} role="presentation" />
    );
  };

  return (
    <div className="country-page__gallery_rating">
      {drawStars(1)}
      {drawStars(2)}
      {drawStars(3)}
      {drawStars(4)}
      {drawStars(5)}
      <button type="button" className="show-ratings" onClick={() => setIsListShown(true)}>
        <i className="far fa-question-circle" />
      </button>
      { isListShown && <RatingList isModalOpened={setIsListShown} idPlace={idPlace} /> }
    </div>
  );
};

export default PlacesRating;
