import React from 'react';
import './search.scss';

const Search = ({ value, onChange, onSearchButtonClick }) => {
  const handlerOnKeydown = (e) => {
    if (e.key === 'Enter') {
      onSearchButtonClick(e);
    }
    // console.log(e.target)
  }

  return (
    <div className="search">
      <div>
        <input
          value={value}
          placeholder="Search..."
          className="search__input"
          autoFocus
          onChange={onChange}
          onKeyDown={handlerOnKeydown}
        />
      </div>
      <button
        className="search__button"
        type="button"
        onClick={onSearchButtonClick}
      />
    </div>        
  );
};

export default Search;
