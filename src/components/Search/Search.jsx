import React from 'react';
import './search.scss';

const Search = ({ value, onChange, onSubmit }) => {
  const handlerOnKeydown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  }

  const clearSearchField = () => {
    onChange({ target: { value: '' } });
  }

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <input
          value={value}
          placeholder="Search..."
          className="search__input"
          autoFocus
          onChange={onChange}
          onKeyDown={handlerOnKeydown}
        />
        <i
          className="search__delete-icon far fa-times-circle"
          onClick={clearSearchField}
        />
      </div>
      <button
        className="search__button"
        type="button"
        onClick={onSubmit}
      >       
        <i className="fas fa-search"></i>
      </button>
    </div>        
  );
};

export default Search;
