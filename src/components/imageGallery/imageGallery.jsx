import { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';

import './imageGallery.scss';

const PageImageGallery = () => {
  const [imgId, setImgId] = useState(0);
  const countryData = useSelector((rootState) => rootState.control.countryConfig);
  const currentCountry = countryData.shortName;
  console.log('in the gallery, currentCountry is:', currentCountry);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  console.log('currentPlaces are:', currentPlaces);

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
  }, [lang]);

  const GetIdImage = (id) => {
    setImgId(id);
  };

  return (
    <div className="country-page__gallery">
      <ImageGallery items={imagesForCarousel} onSlide={GetIdImage} />
      <div className="country-page__gallery_description-block">
        <p className="country-page__gallery_description-block_text">
          {descriptions[imgId]}
        </p>
      </div>
      <div className="country-page__gallery_rating">
        stars
      </div>
    </div>
  );
};

export default PageImageGallery;
