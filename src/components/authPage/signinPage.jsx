import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPerson } from '../../actions/control';
import fetchData from '../../utils/fetchData';
import DefaultPhoto from '../../assets/images/default-photo.jpg';
import DeleteIMG from '../../assets/images/error.svg';
import './authPage.css';

const LogInPage = ({ backRef }) => {
  const dispatch = useDispatch();
  const DEFAULT_WARNING = 'Invalid nickname or password!';
  const [warningImg, setImgWarning] = useState(false);
  const [imgURL, setImgUrl] = useState(null);

  const [isOpenPass, togglePass] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningMessage, setMessage] = useState(DEFAULT_WARNING);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const MAX_IMAGE_SIZE = 4000000;

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
      files[0].size >= MAX_IMAGE_SIZE
        ? setImgWarning(true)
        : setImage(base64data);
    };
  };

  const handleChangeLogin = ({ target: { value } }) => {
    setLogin(value);
    if (warning) {
      setWarning(false);
      setMessage(DEFAULT_WARNING);
    }
  };

  const handleChangePass = ({ target: { value } }) => {
    setPass(value);
    if (warning) {
      setWarning(false);
      setMessage(DEFAULT_WARNING);
    }
  };

  const toggleVisiblePassword = () => {
    togglePass(!isOpenPass);
  };

  const handlerDeleteImg = () => {
    setImage(null);
  }

  const SignInAccount = (e) => {
    e.preventDefault();
    if (!login || !pass) {
      setWarning(true);
      return;
    }
    if (pass.length < 8 || pass.length > 20) {
      setMessage('Passwords length should be between 8 and 20');
      setWarning(true);
      return;
    }
    const newPerson = { nickname: login, pass, photo: imgURL }
    if (!newPerson.photo) {
        delete newPerson.photo;
    }

    fetchData('POST', 'persons', null, JSON.stringify(newPerson))
      .then((data) => {
        if (data.status === 500) {
          setMessage('This nickname is already taken');
          setWarning(true);
          return;
        }
        
        const { nickname, photo } = newPerson;
        dispatch(setCurrentPerson({ nickname, photo }));

        backRef.current.click();
      })
      .catch((err) => console.log('Error - ', err));
  };

  return (
    <form className='form-container' onSubmit={SignInAccount}>
      {warning && <div className='warning-error'>{warningMessage}</div>}
      <div className='form-field'>
        <input
          className='input-text'
          name='login'
          placeholder='Nickname'
          type='text'
          value={login}
          autoComplete='off'
          onChange={handleChangeLogin}
        />
      </div>
      <div className='form-field'>
        <input
          className='input-text input-pass'
          name='pass'
          placeholder='Password'
          type={isOpenPass ? 'text' : 'password'}
          value={pass}
          autoComplete='off'
          onChange={handleChangePass}
        />
        <span className='toggle-pass' onClick={toggleVisiblePassword} />
      </div>
      {warningImg && <div className='warning-error'>Max image size is 4MB</div>}
      <div className='form-field photo-field'>
          <div className='photo-container'>
            <img className='user-photo' src={imgURL || DefaultPhoto} alt='user' />
            <div className='onhover-img' onClick={handlerDeleteImg}>
              <img src={DeleteIMG} alt='clear-img'/>
            </div>
          </div>
          <label className='load-label'>
            Upload your photo
            <input
              type='file'
              className='file-input'
              onChange={loadFile}
            />
          </label>
      </div>
      <input
        className='input-sign-in'
        type='submit'
        value='SignIn'
        name='signin'
      />
    </form>
  );
};

export default LogInPage;
