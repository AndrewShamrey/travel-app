import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPerson, setIsAuthorized } from '../../actions/control';
import FetchData from '../../utils/fetchData';
import { DEFAULT_PHOTO, AUTHORIZATION_INFO, MAX_IMAGE_SIZE } from '../../utils/constants';
import DeleteIMG from '../../assets/images/error.svg';
import './authPage.css';

const LogInPage = () => {
  const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');

  const dispatch = useDispatch();
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const [warningImg, setImgWarning] = useState(false);
  const [imgURL, setImgUrl] = useState(null);
  const [isOpenPass, togglePass] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningMessage, setMessage] = useState('defaultWarning');
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [isActiveSubmit, setActiveSubmit] = useState(true);

  const setImage = (data) => {
    setImgWarning(false);
    setImgUrl(data);
  };

  const loadFile = ({ target: { files } }) => {
    const reader = new FileReader();
    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
    reader.onloadend = () => {
      const base64data = reader.result;
      if (files[0].size >= MAX_IMAGE_SIZE) {
        setImgWarning(true);
      } else {
        setImage(base64data);
      }
    };
  };

  const handleChangeLogin = ({ target: { value } }) => {
    setLogin(value);
    if (warning) {
      setWarning(false);
      setMessage('defaultWarning');
    }
  };

  const handleChangePass = ({ target: { value } }) => {
    setPass(value);
    if (warning) {
      setWarning(false);
      setMessage('defaultWarning');
    }
  };

  const toggleVisiblePassword = () => {
    togglePass(!isOpenPass);
  };

  const handlerDeleteImg = () => {
    setImage(null);
  };

  const validatePersonsData = () => {
    if (!isActiveSubmit) {
      return false;
    }

    if (!login || !pass) {
      setWarning(true);
      return false;
    }

    if (pass.length < 8 || pass.length > 20) {
      setMessage('passwordWarning');
      setWarning(true);
      return false;
    }

    return true;
  };

  const signUpAccount = (e) => {
    e.preventDefault();

    if (!validatePersonsData()) {
      return;
    }

    const newPerson = { nickname: login, pass, photo: imgURL };
    if (!newPerson.photo) {
      delete newPerson.photo;
    }

    fetchClass.postNewPerson(JSON.stringify(newPerson))
      .then((data) => {
        if (data.status !== 201) {
          setMessage('nickNameWarning');
          setWarning(true);
          return;
        }

        setActiveSubmit(false);

        const { nickname, photo } = newPerson;
        dispatch(setCurrentPerson({ nickname, photo }));
        dispatch(setIsAuthorized(true));
      })
      .catch((err) => console.log('Error - ', err));
  };

  return (
    <form className="form-container" onSubmit={signUpAccount}>
      {warning && <div className="warning-error">{AUTHORIZATION_INFO[lang][warningMessage]}</div>}
      <div className="form-field">
        <input
          className="input-text"
          name="login"
          placeholder={AUTHORIZATION_INFO[lang].loginName}
          type="text"
          value={login}
          autoComplete="off"
          onChange={handleChangeLogin}
        />
      </div>
      <div className="form-field">
        <input
          className="input-text input-pass"
          name="pass"
          placeholder={AUTHORIZATION_INFO[lang].passName}
          type={isOpenPass ? 'text' : 'password'}
          value={pass}
          autoComplete="off"
          onChange={handleChangePass}
        />
        <span className="toggle-pass" onClick={toggleVisiblePassword} />
      </div>
      {warningImg && <div className="warning-error">{AUTHORIZATION_INFO[lang].imageSizeWarning}</div>}
      <div className="form-field photo-field">
        <div className="photo-container">
          <img className="user-photo" src={imgURL || DEFAULT_PHOTO} alt="user" />
          <div className="onhover-img" onClick={handlerDeleteImg}>
            <img src={DeleteIMG} alt="clear-img" />
          </div>
        </div>
        <label className="load-label" htmlFor="avatar">
          {AUTHORIZATION_INFO[lang].uploadPhoto}
          <input
            type="file"
            id="avatar"
            className="file-input"
            onChange={loadFile}
          />
        </label>
      </div>
      <input
        className="input-sign-in"
        type="submit"
        value={AUTHORIZATION_INFO[lang].signup}
        name="signup"
      />
    </form>
  );
};

export default LogInPage;
