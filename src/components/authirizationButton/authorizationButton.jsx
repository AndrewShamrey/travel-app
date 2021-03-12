import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPerson, setIsAuthorized } from '../../actions/control';
import { DEFAULT_PHOTO } from '../../utils/constants';
import './authorizationButton.scss';

const AuthorizationButton = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthorized = useSelector((rootState) => rootState.control.isAuthorized);
  const currentPerson = useSelector((rootState) => rootState.control.currentPerson);
  const btnRef = useRef(null);

  const toggleAuthorization = () => {
    dispatch(setIsAuthorized(!isAuthorized));
    dispatch(setCurrentPerson(null));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = ({ target }) => {
      const { current } = btnRef;

      if (!(target === current || target.parentNode === current)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div>
      <button ref={btnRef} className='authorization-btn' onClick={toggleMenu}>
        {isAuthorized && (
          <img
            className='authorization-btn__image'
            src={currentPerson.photo || DEFAULT_PHOTO}
            alt='user icon'
          />
        )}
        {!isAuthorized && (
          <i className='authorization-btn__icon far fa-user' />
        )}
      </button>
      {isMenuOpen && (
        <ul className='authorization-btn__menu'>
          {isAuthorized && (
            <li
              onClick={toggleAuthorization}
              className='authorization-btn__menu-item'
            >
              SignOut
            </li>
          )}
          {!isAuthorized && (
            <>
              <li className='authorization-btn__menu-item'>
                <Link to='/authorization'>SignIn</Link>
              </li>
              <li className='authorization-btn__menu-item'>
                <Link to='/authorization/registration'>SignUp</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default AuthorizationButton;
