import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue} from "../../actions/control";
import './search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector((rootState) => rootState.control.searchValue);

  const searchFieldChangeHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const sendSearchRequest = () => {
    dispatch(setSearchValue(value));
  };

  const clearSearchField = () => {
    dispatch(setSearchValue(''));
  };  

  const handlerOnKeydown = (e) => {
    if (e.key === 'Enter') {
      searchFieldChangeHandler(e);
    }
  }

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <input
          value={value || ''}
          placeholder="Search..."
          className="search__input"
          autoFocus
          onChange={searchFieldChangeHandler}
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
        onClick={sendSearchRequest}
      >       
        <i className="fas fa-search"></i>
      </button>
    </div>        
  );
};

export default Search;
