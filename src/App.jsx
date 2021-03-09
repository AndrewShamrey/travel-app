import "./App.scss";
import DateWidget from "./components/dateWidget/dateWidget";
import Card from "./components/card/card";
import Footer from './components/footer/footer'; 
import LoadPhoto from "./components/loadPhoto/loadPhoto";

function App() {
  return (
    <div className="App">
      <div></div>
      <div>
        <DateWidget />
        <LoadPhoto />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
