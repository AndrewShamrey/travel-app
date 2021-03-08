import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import CountryPage from './components/country-page/countryPage';
import MainPage from './components/main-page/mainPage';
import Footer from './components/footer/footer';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
