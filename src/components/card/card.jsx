import { useDispatch } from 'react-redux';
import FetchData from '../../utils/fetchData';
import { MAIN_PLACES } from '../../utils/constants';
import './card.css';

const Card = ({ item, index }) => {
  const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');

  const dispatch = useDispatch();

  return (
    <div key={item} country={item} className="country-card" role="presentation">
      <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
      <div className="country-card__title">
        {item}
      </div>
    </div>
  );
};

export default Card;
