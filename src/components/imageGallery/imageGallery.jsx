import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from 'react-redux';
import FetchData from '../../utils/fetchData';
import { setCountryConfig, setPlacesByCountry } from '../../actions/control';

import './imageGallery.scss';

const PageImageGallery = () => {
  const [imgId, setImgId] = useState(0);
  const countryData = useSelector((rootState) => rootState.control.countryConfig);
  const currentCountry = countryData.shortName;
  console.log('in the gallery, currentCountry is:', currentCountry);
  const lang = useSelector((rootState) => rootState.control.applicationLanguage);
  const currentPlaces = useSelector((rootState) => rootState.control.currentPlaces);
  console.log('currentPlaces are:', currentPlaces);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchClass = new FetchData('https://travel-app-back-113.herokuapp.com/api');

    const redirect = () => {
      history.push('/*');
    };

    fetchClass.getCountry(currentCountry)
      .then(([countryConfig]) => {
        if (!countryConfig) {
          throw new Error('Page not found');
        }
        dispatch(setCountryConfig(countryConfig));
      })
      .then(() => {
        fetchClass.getPlacesByCountry(currentCountry)
          .then((places) => {
            dispatch(setPlacesByCountry(places));
          });
      })
      .catch((err) => {
        console.log('Error - ', err);
        redirect();
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setImgId(0);
  }, [lang]);

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
