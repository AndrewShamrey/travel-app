import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPerson } from '../../actions/control';
import FetchData from '../../utils/fetchData';
import { DEFAULT_PHOTO, MAX_IMAGE_SIZE } from '../../utils/constants';
import { AUTHORIZATION_INFO } from '../../utils/vocabulary';
import './userModal.scss';

const UserModal = () => {
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentUser = useSelector((rootState) => rootState.control.currentPerson);

  const dispatch = useDispatch();

  const [warningImg, setImgWarning] = useState(false);
  const [imgURL, setImgUrl] = useState(null);

  const { _id, nickname, photo } = currentUser || {};

  const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');

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

  const reset = () => {
    setImgUrl(null);
  };

  const confirm = async () => {
    try {
      const newUserData = { ...currentUser, photo: imgURL };
      const body = JSON.stringify(newUserData);
      const response = await fetchClass.updateAvatar(_id, body);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(setCurrentPerson(newUserData));
      setImage(null);
    } catch (err) {
      setImgWarning(err);
    }
  };

  return (
    <div className="user-modal">
      <p>{`Name: ${nickname}`}</p>
      <img
        className="user-modal__photo"
        src={imgURL || photo || DEFAULT_PHOTO}
        alt="User"
      />
      <div className="user-modal__controls">
        <label
          className="user-modal__change-photo"
          htmlFor="user-photo"
        >
          Change photo
          <input
            type="file"
            id="user-photo"
            onChange={loadFile}
          />
          <button
            type="button"
            disabled={!imgURL}
            onClick={confirm}
          >
            Confirm
          </button>
          <button
            type="button"
            disabled={!imgURL}
            onClick={reset}
          >
            Reset
          </button>
        </label>
      </div>
      {warningImg && (
        <div className="warning-error">
          {AUTHORIZATION_INFO[lang].imageSizeWarning}
        </div>
      )}
    </div>
  );
};

export default UserModal;
