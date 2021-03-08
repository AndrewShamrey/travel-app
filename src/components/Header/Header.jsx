import React, { useState } from 'react';
import Search from '../search/search';
import LanguageSelect from '../languageSelect/languageSelect';
import './header.scss';

const Header = ({ searchField }) => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsmenuOpen((state) => !state);
  };
  
  return (
    <header
      className="header"
    >
      <h1 className="header__logo">TravelApp</h1>
      <div
        className={isMenuOpen 
          ? "header__options header__options_visible"
          : "header__options"
        }
      >
        {searchField && <Search/>}
        <LanguageSelect/>
        <button 
          className="header__authorization-btn"
          onClick={() => {}}
        >
          Login
        </button>
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
