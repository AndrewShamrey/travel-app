import { useSelector } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/images/arrow-left.svg';
import { BackButton } from './styledNav';
import { AUTHORIZATION_INFO } from '../../utils/constants';
import LogInPage from './loginPage';
import SignInPage from './signinPage';
import './authPage.css';

const AuthPage = () => {   
  const lang = useSelector((rootState) => rootState.control.applicationLanguage); 
  
  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <div className='auth-content'>
          <div className='head-content'>
            <BackButton to='/'>
              <ArrowLeft />
              <span>TravelApp</span>
            </BackButton>
          </div>
          <div className='content-header'>
            <div>
              <NavLink exact className='tabsItem' to='/authorization'>{AUTHORIZATION_INFO[lang].login}</NavLink>
              <NavLink className='tabsItem' to='/authorization/registration'>{AUTHORIZATION_INFO[lang].signin}</NavLink>
            </div>
          </div>
          <div className='content-wrapper'>
            <Switch>
              <Route exact path='/authorization'>
                <LogInPage />
              </Route>
              <Route path='/authorization/registration'>
                <SignInPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AuthPage;
