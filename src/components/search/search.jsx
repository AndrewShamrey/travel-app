import { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../actions/control';
import { SEARCH__PLACEHOLDER } from '../../utils/constants';
import Spinner from '../spinner/spinner';
import './search.scss';

const Search = ({ isMenuOpen }) => {
  const dispatch = useDispatch();
  const value = useSelector((rootState) => rootState.control.searchValue);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const [isSpinner, setIsSpinner] = useState(false);
  const inputRef = useRef(null);

  const animateSearch = useCallback(() => {
    setIsSpinner(() => true);
    inputRef.current.disabled = true;
    setTimeout(() => {
      setIsSpinner(() => false);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }, 500);
  }, [setIsSpinner]);

  const searchFieldChangeHandler = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const sendSearchRequest = () => {
    dispatch(setSearchValue(value));
    animateSearch();
  };

  const clearSearchField = () => {
    dispatch(setSearchValue(''));
  };

  const handlerOnKeydown = (e) => {
    if (e.key === 'Enter') {
      searchFieldChangeHandler(e);
      animateSearch();
    }
  };

  return (
    <div className={isMenuOpen ? 'search search_visible' : 'search'}>
      <div className="search__input-wrapper">
        <input
          value={value || ''}
          ref={inputRef}
          placeholder={SEARCH__PLACEHOLDER[currentLanguage]}
          className="search__input"
          autoFocus
          autoComplete="off"
          spellCheck="false"
          onChange={searchFieldChangeHandler}
          onKeyDown={handlerOnKeydown}
        />
        { isSpinner && <Spinner additionalClassName="search__spinner" />}
        <button
          className="search__delete-icon"
          type="button"
          onClick={clearSearchField}
        >
          <i className="far fa-times-circle" />
        </button>
      </div>
      <button
        className="search__button"
        type="button"
        onClick={sendSearchRequest}
      >
        <i className="fas fa-search" />
      </button>
    </div>
  );
};

export default Search;
