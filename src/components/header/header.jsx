import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Search from '../search/search';
import LanguageSelect from '../languageSelect/languageSelect';
import AuthorizationButton from '../authirizationButton/authorizationButton';
import './header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  const { pathname } = useLocation();
  const isSearchField = pathname === '/';

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__logo">TravelApp</h1>
      </Link>
      <div className="header__options">
        {isSearchField && <Search isMenuOpen={isMenuOpen} />}
        <LanguageSelect />
        <AuthorizationButton />
        {isSearchField && (
          <button
            className={
              isMenuOpen
                ? 'header__menu-btn header__menu-btn_active'
                : 'header__menu-btn'
            }
            type="button"
            onClick={toggleMenu}
          >
            <i className="fas fa-chevron-circle-down" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
