import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import "./App.scss";
import CountryPage from './components/country-page/countryPage';
import MainPage from './components/main-page/mainPage';

import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          <div></div>
            <Switch>
              <CountryPage
                path="/country" />
              <MainPage
                path="/" />
            </Switch>
          <Footer />
        </Route>
      </div>                                  
    </Router>
  );
}

export default App;
