import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Map.scss';

import { YMaps, Map, Placemark, Panorama, TypeSelector } from 'react-yandex-maps';


const MyPlacemark = () => {
  // const mapState = { center: [-35.306904, 149.125529], zoom: 10 };

  // const dispatch = useDispatch();
  // const currentCountry = useSelector((rootState) => rootState.control.currentCountry);
  // const currentLang = useSelector((rootState) => rootState.control.currentLang);
  // const timeDifference = useSelector((rootState) => rootState.control.timeDifference);
  // const fullName = useSelector((rootState) => rootState.control.fullName);
  // const capital = useSelector((rootState) => rootState.control.capital);
  const description = useSelector((rootState) => rootState.control.description);

  const [zoom, setZoom] = React.useState(10);
  const mapState = React.useMemo(() => ({ center: [-35.306904, 149.125529], zoom }), [
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

export default MyPlacemark;