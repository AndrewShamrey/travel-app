import './card.scss';

const Card = ({ country, capital, image }) => (
  <div className="country-card" role="presentation">
    <img src={image} alt="place" className="country-card__image" />
    <p className="country-card__title">
      <span className="country-card__name">{country}</span>
      {' - '}
      <span>{capital}</span>
    </p>
  </div>
);

export default Card;
