import React from 'react';
import { useSelector } from 'react-redux';
import './Map.scss';

import {
  YMaps, Map, Placemark, TypeSelector,
} from 'react-yandex-maps';
import icon from '../../assets/images/pin.png';

const CountryMap = () => {
  const mapRef = React.createRef(null);
  const { applicationLanguage } = useSelector((rootState) => rootState.control);
  const mapLanguage = `${applicationLanguage}_${applicationLanguage === 'en' ? 'US' : 'RU'}`;
  const {
    shortName, latlng, capitalCoord, iso3166,
  } = useSelector((rootState) => rootState.control.countryConfig);

  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      const objectManager = new ymaps.ObjectManager();
      ymaps.borders
        .load('001', {
          lang: applicationLanguage,
          quality: 2,
        })
        .then((result) => {
          result.features.forEach((el) => {
            if (el.properties.iso3166 === iso3166) {
              el.id = el.properties.iso3166;
              el.options = {
                fillOpacity: 0.6,
                strokeColor: '#FFF',
                strokeOpacity: 0.5,
              };
              if (!el.options.fillColor) {
                el.options.fillColor = '#150f7d';
                objectManager.add(el);
                mapRef.current.geoObjects.add(objectManager);
              }
            }
          });
        });
    }
  };

  return (
    <YMaps key={mapLanguage} query={{ lang: mapLanguage }}>
      <Map
        defaultState={{
          center: latlng,
          zoom: 3,
          controls: ['zoomControl', 'fullscreenControl'],
          lang: mapLanguage,
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl', 'borders', 'ObjectManager']}
        className="map"
        lang="en_US"
        onLoad={(ymaps) => getRegions(ymaps)}
        instanceRef={mapRef}
        options={{
          minZoom: 2,
        }}
      >
        <Placemark
          modules={['geoObject.addon.balloon']}
          defaultGeometry={(capitalCoord.length > 0) ? capitalCoord : latlng}
          properties={{
            hintContent: `${shortName}`,
            balloonContent: `${shortName}`,
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: icon,
            iconImageSize: [30, 30],
            iconImageOffset: [0, -30],
          }}
        />
        <TypeSelector options={{ float: 'right' }} />
      </Map>
    </YMaps>
  );
};

export default CountryMap;
