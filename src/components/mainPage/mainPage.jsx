/* eslint-disable react/no-array-index-key */
import { ALL_COUNTRIES } from '../../utils/constants';
import Card from '../card/card';
import './mainPage.scss';

const MainPage = () => (
  <div className="main-page">
    <div className="cards-cont">
      {ALL_COUNTRIES.map((item, index) => <Card item={item} index={index} key={index} />)}
    </div>
  </div>
);

export default MainPage;
