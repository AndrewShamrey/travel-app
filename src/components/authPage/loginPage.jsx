import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPerson, setIsAuthorized } from '../../actions/control';
import fetchData from '../../utils/fetchData';
import './authPage.css';

const LogInPage = ({ backRef }) => {
  const dispatch = useDispatch();
  const [isOpenPass, togglePass] = useState(false);
  const [warning, setWarning] = useState(false);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const handleChangeLogin = ({ target: { value } }) => {
    setLogin(value);
    if (warning) {
      setWarning(false);
    }
  };

  const handleChangePass = ({ target: { value } }) => {
    setPass(value);
    if (warning) {
      setWarning(false);
    }
  };

  const toggleVisiblePassword = () => {
    togglePass(!isOpenPass);
  };

  const logInAccount = (e) => {
    e.preventDefault(); 
    if (!login || !pass) {
      setWarning(true);
      return;
    }
    fetchData('GET', 'persons', login)
      .then((response) => response.json())
      .then(([ person ]) => {
        if (!person || pass !== person.pass) {
          setWarning(true);
          return;
        }

        const { _id, nickname, photo } = person;
        dispatch(setCurrentPerson({ _id, nickname, photo }));
        dispatch(setIsAuthorized(true));
        
        backRef.current.click();
      })
      .catch((err) => console.log('Error - ', err));
  };

  return (
    <form className='form-container' onSubmit={logInAccount}>
      {warning && <div className='warning-error'>Incorrect nickname or password!</div>}
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
      <input
        className='input-sign-in'
        type='submit'
        value='LogIn'
        name='login'
      />
    </form>
  );
};

export default LogInPage;
