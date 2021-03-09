import React, { useState } from 'react';
import {
 useLocation, Link,
} from 'react-router-dom';
import Search from '../search/search';
import LanguageSelect from '../languageSelect/languageSelect';
import AuthorizationButton from '../authirizationButton/authorizationButton';
import './header.scss';

const Header = ({ searchField }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  const { pathname } = useLocation();
  const isSearchField = pathname === '/';
  
  return (
    <header
      className="header"
    >
      <Link to="/">
        <h1 className="header__logo">
          TravelApp
        </h1>
      </Link>
      <div
        className={isMenuOpen 
          ? "header__options header__options_visible"
          : "header__options"
        }
      >
        {isSearchField && <Search/>}
        <LanguageSelect/>
        <AuthorizationButton/>
      </div>
      <button
        className={isMenuOpen 
          ? "header__menu-btn header__menu-btn_active" 
          : "header__menu-btn"
        }
        onClick={toggleMenu}
      >
        <i className="fas fa-chevron-circle-down"></i>
      </button>
    </header>
  );
};

export default Header;
