import { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';

import './imageGallery.scss';

const PageImageGallery = ({ countryData, currentPlaces }) => {
  const [imgId, setImgId] = useState(0);
  // const countryData = useSelector((rootState) => rootState.control.countryConfig);
  const currentCountry = countryData.shortName;
  console.log('in the gallery, currentCountry is:', currentCountry);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  // const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  console.log('currentPlaces are:', currentPlaces);

  // const images = currentPlaces.map((place) => place.image);

  // const name = currentPlaces.map((place) => place.info[lang].name);

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

  // что-то все-таки не так работает
  useEffect(() => {
    setImgId(0);
  }, [lang]);

  const GetIdImage = (id) => {
    console.log(id);
    setImgId(id);
  };

  return (
    <div className="country-page__gallery">
      <ImageGallery items={imagesForCarousel} onSlide={GetIdImage} />
      <div className="country-page__gallery_description-block">
        {descriptions[imgId]}
      </div>
    </div>
  );
};

export default PageImageGallery;
