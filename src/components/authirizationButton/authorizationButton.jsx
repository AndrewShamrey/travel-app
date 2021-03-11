import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPerson } from "../../actions/control";
// import { DEFAULT_USER_ICON } from "../../utils/constants";
import DefaultPhoto from "../../assets/images/default-photo.jpg";
import "./authorizationButton.scss";

const AuthorizationButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const currentPerson = useSelector((rootState) => rootState.control.currentPerson);

  const btnRef = useRef(null);

  const signOutHandler = () => {
    dispatch(setCurrentPerson(null));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      const { target } = e;
      const { current } = btnRef;

      if (!(target === current || target.parentNode === current)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div>
      <button ref={btnRef} className="authorization-btn" onClick={toggleMenu}>
        {currentPerson && (
          <img
            className="authorization-btn__image"
            src={currentPerson.photo || DefaultPhoto}
            alt="user icon"
          />
        )}
        {!currentPerson && (
          <i className="authorization-btn__icon far fa-user" />
        )}
      </button>
      {isMenuOpen && (
        <ul className="authorization-btn__menu">
          {currentPerson && (
            <li
              onClick={signOutHandler}
              className="authorization-btn__menu-item"
            >
              SignOut
            </li>
          )}
          {!currentPerson && (
            <>
              <li className="authorization-btn__menu-item">
                <Link to="/authorization">SignIn</Link>
              </li>
              <li className="authorization-btn__menu-item">
                <Link to="/authorization/registration">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default AuthorizationButton;
