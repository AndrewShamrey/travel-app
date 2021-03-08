import Header from '../src/components/header/header';
import DateWidget from "./components/dateWidget/dateWidget";
import Card from "./components/card/card";
import Footer from './components/footer/footer';
import MyPlacemark from './components/map/Map';

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header searchField />
      <div>
        <DateWidget />
        <Card />
        <MyPlacemark />
      </div>
      <Footer />
    </div>
  );
}

export default App;
