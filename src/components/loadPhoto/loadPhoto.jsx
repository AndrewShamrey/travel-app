import { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./loadPhoto.css";

const LoadPhoto = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);   
  const [warning, setWarning] = useState(false);
  const [imgURL, setImgUrl] = useState(null);

  const setImage = useCallback((data) => {
    setWarning(false);
    const personPhoto = data;
    setImgUrl(personPhoto);
    // dispatch(setCardStyle(data));
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
    }
  }, [setImage]);

  return (
      <>
        <label className={"load-label"}>
          {warning ? "Max image size is 8MB" : "Upload your photo"}
          <input ref={inputRef} type="file" className="file-input" onChange={loadFile}/>
        </label>
        {imgURL && <img src={imgURL} alt="user" />}
      </>
  );
} 

export default LoadPhoto;
