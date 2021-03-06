import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FetchData from '../../utils/fetchData';
import { LABEL_FOR_NO_DATA_RATING } from '../../utils/vocabulary';
import Spinner from '../spinner/spinner';
import './ratingList.scss';

const RatingList = ({ isModalOpened, idPlace }) => {
  const [ratingArr, setRatingArr] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);

  useEffect(() => {
    const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');
    const { personsId } = currentPlaces[idPlace];
    fetchClass._defaultMethod('GET', 'persons/ratingdata', JSON.stringify(personsId))
      .then((ratingData) => {
        setRatingArr(ratingData);
        setIsLoader(false);
      })
      .catch((err) => console.log('The error is - ', err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noDataToDisplay = (
    <p className="no-data">
      {LABEL_FOR_NO_DATA_RATING[lang]}
    </p>
  );

  const showStars = (num) => {
    const starFull = 'fas fa-star stars';
    const starPath = 'far fa-star stars';
    const arrStars = [1, 2, 3, 4, 5];

    return arrStars.map((star, id) => (
      <i key={id} className={star <= num ? starFull : starPath} />
    ));
  };

  const allRates = ratingArr.map((data, id) => (
    <div key={id} className="list-line">
      <p className="list-line_name">
        {data[0].nickname}
      </p>
      <p className="list-line_rating">
        {showStars(data[1].rating)}
      </p>
    </div>
  ));

  const theList = () => {
    if (isLoader) {
      return (<Spinner additionalClassName="spinner" />);
    }
    return ratingArr.length > 0 ? allRates : noDataToDisplay;
  };

  return (
    <div className="rating-list">
      <button type="button" className="close-modal" onClick={() => isModalOpened(false)}>
        <i className="far fa-times-circle" />
      </button>
      <div className="rating-list__wrapper">
        <div className="rating-list_content">
          {theList()}
        </div>
      </div>
    </div>
  );
};

export default RatingList;
