import { MAIN_PLACES } from '../../utils/constants';
import './card.css';

const Card = ({ country, capital, index }) => (
  <div className="country-card" role="presentation">
    <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
    <div className="country-card__title">
      {`${country} - ${capital}`}
    </div>
  </div>
);

export default Card;
