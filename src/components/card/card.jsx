import { useRef, useEffect } from 'react';
import { MAIN_PLACES } from '../../utils/constants';
import './card.scss';

const Card = ({ country, capital, index }) => (
  <div className="country-card" role="presentation">
    <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
    <p className="country-card__title">
      {`${country} - ${capital}`}
    </p>
  </div>
);

export default Card;
