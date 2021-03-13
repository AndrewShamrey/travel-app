import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrevState } from './actions/control';
import Header from './components/header/header';
import CountryPage from './components/countryPage/countryPage';
import MainPage from './components/mainPage/mainPage';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import AuthPage from './components/authPage/authPage';
import ErrorPage from './components/errorPage/errorPage';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((rootState) => rootState.control);

  const handleUnload = useCallback(() => {
    localStorage.setItem('currentState', JSON.stringify(state));
  }, [state]);

  const handleLoad = useCallback(() => {
    const prevState = JSON.parse(localStorage.getItem('currentState'));
    if (prevState) {
      dispatch(setPrevState(prevState));
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    window.addEventListener('unload', handleUnload);
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('unload', handleUnload);
    };
  }, [handleLoad, handleUnload]);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/authorization">
            {state.currentPerson ? <Redirect to="/" /> : <AuthPage />}
          </Route>
          <Route path="/country/:country">
            <CountryPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
