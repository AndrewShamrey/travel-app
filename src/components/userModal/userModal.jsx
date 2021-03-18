import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPerson } from '../../actions/control';
import FetchData from '../../utils/fetchData';
import { DEFAULT_PHOTO, MAX_IMAGE_SIZE, BACK_URL } from '../../utils/constants';
import { AUTHORIZATION_INFO, USER_MODAL } from '../../utils/vocabulary';
import './userModal.scss';

const UserModal = ({ toggleModal }) => {
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentUser = useSelector((rootState) => rootState.control.currentPerson);

  const dispatch = useDispatch();

  const [warningImg, setImgWarning] = useState(false);
  const [imgURL, setImgUrl] = useState(null);

  const { _id, nickname, photo } = currentUser || {};

  const fetchClass = new FetchData(BACK_URL);

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
    <div className="backdrop">
      <div className="user-modal">
        <button
          type="button"
          className="user-modal__close"
          onClick={toggleModal}
        >
          <i className="far fa-times-circle" />
        </button>
        <p className="user-modal__name">{`${USER_MODAL[lang].name}: ${nickname}`}</p>
        <img
          className="user-modal__photo"
          src={imgURL || photo || DEFAULT_PHOTO}
          alt="User"
        />
        <div className="user-modal__controls">
          <label
            className="user-modal__change-photo user-modal__button"
            htmlFor="user-photo"
          >
            {USER_MODAL[lang].change}
            <input
              type="file"
              id="user-photo"
              onChange={loadFile}
            />
          </label>
          <button
            type="button"
            className="user-modal__button"
            disabled={!imgURL}
            onClick={confirm}
          >
            {USER_MODAL[lang].confirm}
          </button>
          <button
            type="button"
            className="user-modal__button"
            disabled={!imgURL}
            onClick={reset}
          >
            {USER_MODAL[lang].reset}
          </button>
        </div>
        {warningImg && (
          <div className="warning-error">
            {AUTHORIZATION_INFO[lang].imageSizeWarning}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;
