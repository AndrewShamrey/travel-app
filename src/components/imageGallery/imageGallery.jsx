import { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import PlacesRating from '../placesRating/placesRating';
import './imageGallery.scss';

const PageImageGallery = () => {
  const [imgId, setImgId] = useState(0);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const isAuthorized = useSelector((rootState) => rootState.control.isAuthorized);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  const descriptions = currentPlaces.map((place) => place.info[lang].description);

  const imagesForCarousel = currentPlaces.map((place) => ({
    original: place.image,
    thumbnail: place.image,
    originalAlt: place.info[lang].name,
    thumbnailAlt: place.info[lang].name,
    originalTitle: place.info[lang].name,
    thumbnailTitle: place.info[lang].name,
    description: place.info[lang].name,
  }));

  useEffect(() => {
    setImgId(0);
  }, [lang]);

  const getIdImage = (id) => {
    setImgId(id);
  };

  return (
    <div className="country-page__gallery">
      <ImageGallery items={imagesForCarousel} onSlide={getIdImage} />
      <div className="country-page__gallery_description-block">
        <p className="country-page__gallery_description-block_text">
          {descriptions[imgId]}
        </p>
      </div>
      {isAuthorized && <PlacesRating idPlace={imgId} />}
    </div>
  );
};

export default PageImageGallery;
