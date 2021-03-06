import React from 'react';
import Search from '../Search/Search';
import './header.scss';

const Header = ({ searchField }) => {
  return (
    <header
      className="header"
    >
      <h1>TravelApp</h1>
      <div
        className="header__options"
      >
        {searchField && <Search />}
        <select>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="be">BE</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
