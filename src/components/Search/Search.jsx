import React from 'react';
import './search.scss';

const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        value={value}
        placeholder="Search..."
        className="search__input"
        autoFocus
        onChange={onChange}
      />
      <button
        className="search__button"
      />
    </div>
        
        
  );
};

export default Search;
