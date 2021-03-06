import "./App.scss";
import ExampleContainer from "./containers/exampleContainer";
import DateWidget from "./components/dateWidget/dateWidget";
import ExCard from "./components/exCard/exCard";
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <ExampleContainer />
      <div>
        <DateWidget />
        <ExCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
