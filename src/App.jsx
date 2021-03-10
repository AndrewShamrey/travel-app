import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryConfig } from "./actions/control";
import Header from "../src/components/header/header";
import CountryPage from "./components/countryPage/countryPage";
import MainPage from "./components/mainPage/mainPage";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const countryConfig = useSelector(
    (rootState) => rootState.control.countryConfig
  );

  const handleUnload = useCallback(() => {
    localStorage.setItem("currentCountryConfig", JSON.stringify(countryConfig));
  }, [countryConfig]);

  const handleLoad = useCallback(() => {
    const prevState = JSON.parse(localStorage.getItem("currentCountryConfig"));
    if (prevState) {
      dispatch(setCountryConfig(prevState))
    };
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("load", handleLoad);
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("unload", handleUnload);
    };
  }, [handleLoad, handleUnload]);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:country">
            <CountryPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
