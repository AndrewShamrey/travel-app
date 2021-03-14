import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import './imageGallery.scss';

const PageImageGallery = () => {
  const countryData = useSelector((rootState) => rootState.control.countryConfig);
  const currentCountry = countryData.shortName;
  console.log('in the gallery, currentCountry is:', currentCountry);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  console.log('currentPlaces are:', currentPlaces);

  const images = currentPlaces.map((place) => place.image);
  const names = currentPlaces.map((place) => place.info[lang].name);
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

  return (
    <div className="country-page__gallery">
      <ImageGallery items={imagesForCarousel} />
    </div>
  );
};

export default PageImageGallery;
