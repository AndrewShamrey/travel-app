import { MAIN_PLACES } from '../../utils/constants';
import './card.scss';

const Card = ({ country, capital, index }) => (
  <div className="country-card" role="presentation">
    <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
    <p className="country-card__title">
      <span className="country-card__name">{country}</span>
      {' - '}
      <span>{capital}</span>
    </p>
  </div>
);

export default Card;
