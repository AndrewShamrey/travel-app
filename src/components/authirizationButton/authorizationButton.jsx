import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthorized } from "../../actions/control";
import { DEFAULT_USER_ICON } from "../../utils/constants";
import "./authorizationButton.scss";

const AuthorizationButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const isAuthorized = useSelector((rootState) => rootState.control.isAuthorized);

  const btnRef = useRef(null);

  const toggleAuthorization = () => {
    dispatch(setIsAuthorized(!isAuthorized));
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
        {isAuthorized ? (
          <img
            className="authorization-btn__image"
            src={DEFAULT_USER_ICON}
            alt="user icon"
          />
        ) : (
          <i className="authorization-btn__icon far fa-user" />
        )}
      </button>
      {isMenuOpen && (
        <ul className="authorization-btn__menu">
          {isAuthorized ? (
            <li
              onClick={toggleAuthorization}
              className="authorization-btn__menu-item"
            >
              SignOut
            </li>
          ) : (
            <>
              <li className="authorization-btn__menu-item">SignIn</li>
              <li className="authorization-btn__menu-item">SignUp</li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default AuthorizationButton;
