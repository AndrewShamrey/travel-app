import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setApplicationLanguage } from "../../actions/control";
import Search from '../Search/Search';
import './header.scss';

const Header = ({ searchField }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((rootState) => rootState.control.searchValue);
  const applicationLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const searchFieldChangeHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const selectChangeHandler = (e) => {
    dispatch(setApplicationLanguage(e.target.value));
  };
  
  return (
    <header
      className="header"
    >
      <h1>TravelApp</h1>
      <div
        className="header__options"
      >
        {searchField && (
          <Search
            value={searchValue}
            onChange={searchFieldChangeHandler}
            onSearchButtonClick={selectChangeHandler}
          />
        )}
        <select 
          value={applicationLanguage}
          onChange={selectChangeHandler}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="be">BE</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
