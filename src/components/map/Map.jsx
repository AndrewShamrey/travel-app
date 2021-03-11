import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Map.scss';

import { YMaps, Map, Placemark, Panorama, TypeSelector } from 'react-yandex-maps';


// Карта

//     для отображения карты используется бесплатное API, которое не требует для использования подключения платёжных документов
//     предпочтение отдавайте API, в которых есть режим просмотра улиц
//     карта переводится на язык отображения страницы, если такая возможность есть в используемом API
//     карту можно развернуть во весь экран
//     карта интерактивная, её можно перетаскивать, увеличивать и уменьшать масштаб
//     страна, о которой идёт речь, подсвечена
//     для стилизации карты используются кастомные (пользовательские) стили, если такая возможность есть в используемом API
//     столица страны на карте отмечена маркером


const CountryMap = () => {
  // const mapState = { center: [-35.306904, 149.125529], zoom: 10 };

  const currentCountry = useSelector((rootState) => rootState.control);
  const { latlng } = currentCountry.countryConfig;

  console.log('currentCountry ', currentCountry, latlng);
  const description = currentCountry;
  console.log('description ', description);

  const [zoom, setZoom] = React.useState(3);
  const mapState = React.useMemo(() => ({ center: latlng, zoom }), [
    zoom,
  ])
  
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [...mapState.center],
          zoom: mapState.zoom,
          controls: ['zoomControl', 'fullscreenControl'],
          // defaultMapTypes: ['yandex#map' , 'yandex#satellite' , 'yandex#hybrid']
        }}
        
        modules={['control.ZoomControl', 'control.FullscreenControl']}
        className='map'
      >
        <Placemark 
          modules={['geoObject.addon.balloon']}
          defaultGeometry={[...mapState.center]}
          properties={{
            balloonContentBody: `${description}`,
          }}
        />
        <TypeSelector options={{ float: 'right' }} />
      </Map>
      {/* <Panorama defaultPoint={[55.733685, 37.588264]} /> */}
    </YMaps>
  );
}

export default CountryMap;