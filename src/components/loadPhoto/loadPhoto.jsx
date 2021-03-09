import { useState, useCallback, useRef } from "react";
import "./loadPhoto.css";

const LoadPhoto = () => {
  const inputRef = useRef(null);
  const [warning, setWarning] = useState(false);
  const [imgURL, setImgUrl] = useState(null);

  const setImage = useCallback((data) => {
    setWarning(false);
    const personPhoto = data;
    setImgUrl(personPhoto);
  }, []);

  const loadFile = useCallback((e) => {
    const reader = new FileReader();
    if (inputRef.current.files[0]) {
      reader.readAsDataURL(inputRef.current.files[0]);
    }
    reader.onloadend = () => {
      const base64data = reader.result;
      inputRef.current.files[0].size >= 8000000
        ? setWarning(true)
        : setImage(base64data);
    };
  }, [setImage]);

  return (
    <div>
      <label className={"load-label"}>
        {warning ? "Max image size is 8MB" : "Upload your photo"}
        <input
          ref={inputRef}
          type="file"
          className="file-input"
          onChange={loadFile}
        />
      </label>
      {imgURL && <img src={imgURL} alt="user" />}
    </div>
  );
};

export default LoadPhoto;
