import { MAIN_PLACES } from '../../utils/constants';
import './card.css';

const Card = ({ item, index }) => (
  <div key={item} country={item} className="country-card" role="presentation">
    <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
    <div className="country-card__title">
      {item}
    </div>
  </div>
);

export default Card;
