import { current } from 'immer';
import { useRef, useEffect } from 'react';
import { MAIN_PLACES } from '../../utils/constants';
import './card.scss';

const Card = ({ country, capital, index }) => {
  const ref = useRef();
  console.log(ref?.current?.selectionStart, ref?.current?.selectionEnd);
  // useEffect(() => {
  //   ref.current.getSelection().setRange(1, 2);
  //   // ref.current.selectionEnd = 10;
  // }, [ref]);

  return (
    <div className="country-card" role="presentation">
      <img src={MAIN_PLACES[index]} alt="place" className="country-card__image" />
      <p className="country-card__title" ref={ref}>
        {`${country} - ${capital}`}
      </p>
    </div>
  );
};

export default Card;
