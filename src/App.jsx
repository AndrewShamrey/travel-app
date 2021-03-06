import "./App.css";
import ExampleContainer from "./containers/exampleContainer";
import DateWidget from "./components/dateWidget/dateWidget";
import ExCard from "./components/exCard/exCard";

function App() {
  return (
    <div className="App">
      <ExampleContainer />
      <DateWidget />

      <ExCard />
    </div>
  );
}

export default App;
