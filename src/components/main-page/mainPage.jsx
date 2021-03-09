import DateWidget from './../dateWidget/dateWidget';
import Card from './../card/card';
import './mainPage.scss';

const MainPage = () => {

  return (
    <div className="main-page">
      <DateWidget />
      <Card />
    </div>
  )
};

export default MainPage;
