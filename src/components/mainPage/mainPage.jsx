/* eslint-disable react/no-array-index-key */
import {
  Link,
  useParams,
} from 'react-router-dom';
import { ALL_COUNTRIES } from '../../utils/constants';
import Card from '../card/card';
import './mainPage.scss';

const MainPage = () => {
  const { country } = useParams();
  return (
    <div className="main-page">
      <div className="cards-cont">
        {ALL_COUNTRIES.map((item, index) => {
          const path = `/country/${item}`;

          return (
            <Link to={path} key={index}>
              <Card item={item} index={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
