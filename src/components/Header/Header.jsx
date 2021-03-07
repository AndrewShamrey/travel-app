import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setApplicationLanguage } from "../../actions/control";
import Search from '../Search/Search';
import './header.scss';

const Header = ({ searchField }) => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const dispatch = useDispatch();
  const searchValue = useSelector((rootState) => rootState.control.searchValue);
  const applicationLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const searchFieldChangeHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const selectChangeHandler = (e) => {
    dispatch(setApplicationLanguage(e.target.value));
  };

  const toggleMenu = () => {
    setIsmenuOpen((state) => !state);
  }
  
  return (
    <header
      className="header"
    >
      <h1 className="header__logo">TravelApp</h1>
      <div
        className={isMenuOpen ? "header__options header__options_visible" : "header__options"}
      >
        {searchField && (
          <Search
            value={searchValue}
            onChange={searchFieldChangeHandler}
            onSubmit={selectChangeHandler}
          />
        )}
        <select 
          className="header__select"
          value={applicationLanguage}
          onChange={selectChangeHandler}
        >
          <option 
            value="en"
            className="header__select-item"
          >
            EN
          </option>
          <option 
            value="ru"
            className="header__select-item"
          >
            RU
          </option>
          <option 
            value="be"
            className="header__select-item"
          >
            BE
          </option>
        </select>
        <button 
          className="header__authorization-btn"
          onClick={() => {}}
        >
          Login
        </button>
      </div>
      <button
        className={isMenuOpen ? "header__menu-btn header__menu-btn_active" : "header__menu-btn"}
        onClick={toggleMenu}
      >
        <i className="fas fa-chevron-circle-down"></i>
      </button>
    </header>
  );
};

export default Header;
