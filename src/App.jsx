import Header from '../src/components/Header/Header';
import DateWidget from "./components/dateWidget/dateWidget";
import Card from "./components/card/card";
import Footer from './components/footer/footer';


import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header searchField />
      <div></div>
      <div>
        <DateWidget />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
