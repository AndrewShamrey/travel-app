import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";

import Header from '../src/components/header/header';
import CountryPage from './components/country-page/countryPage';
import MainPage from './components/main-page/mainPage';
import Footer from './components/footer/footer';
import ScrollToTop from './utils/scrollToTop';

import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
          <Switch>
            <Route 
              path="/:country" >
              <CountryPage />
            </Route>
            <Route
              path="/" >
              <MainPage />
            </Route>   
          </Switch>
        <Footer />
      </div>                                  
    </Router>
  );
}

export default App;
