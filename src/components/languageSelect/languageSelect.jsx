import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApplicationLanguage } from '../../actions/control';
import { APPLICATION_LANGUAGES } from '../../utils/constants';
import './languageSelect.scss';

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const onChange = (e) => {
    dispatch(setApplicationLanguage(e.target.value));
  };

  const options = APPLICATION_LANGUAGES[currentLanguage];
  return (
    <select
      className="select"
      value={currentLanguage}
      onChange={onChange}
    >
      {options.map(({ value, text }) => (
        <option
          key={value}
          value={value}
          className="select__option"
        >
          {text}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
