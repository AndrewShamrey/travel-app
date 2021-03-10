import DateWidget from "../dateWidget/dateWidget";
import Card from "../card/card";
import LoadPhoto from "../loadPhoto/loadPhoto";
import "./mainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <DateWidget />
      {/* <LoadPhoto /> */}
      <Card />
    </div>
  );
};

export default MainPage;
