import { useRef } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/images/arrow-left.svg';
import { BackButton } from "./styledNav";
import LogInPage from "./loginPage";
import SignInPage from "./signinPage";
import "./authPage.css";

const AuthPage = () => {
  const backRef = useRef(null);
    
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          <div className="head-content">
            <BackButton ref={backRef} to="/">
              <ArrowLeft />
              <span>TravelApp</span>
            </BackButton>
          </div>
          <div className="content-header">
            <div>
              <NavLink exact className="tabsItem" to="/authorization">LogIn</NavLink>
              <NavLink className="tabsItem" to="/authorization/registration">SignIn</NavLink>
            </div>
          </div>
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/authorization">
                <LogInPage backRef={backRef} />
              </Route>
              <Route path="/authorization/registration">
                <SignInPage backRef={backRef} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AuthPage;
