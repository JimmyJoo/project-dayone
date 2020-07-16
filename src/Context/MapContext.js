import React from 'react';
import useMap from '../Hook/useMap';

export const MapContext = React.createContext(null);

export const MapProvider = ({ children }) => {
  const {
    mapState,
    setMap,
    setSublist,
    setPlaces,
    setPagination,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
    setMessage,
    updatePlace,
    setClickPosition,
  } = useMap();

  const mapContextValue = {
    mapState,
    setMap,
    setSublist,
    setPlaces,
    setPagination,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
    setMessage,
    updatePlace,
    setClickPosition,
  };

  return (
    <MapContext.Provider value={mapContextValue}>
      {children}
    </MapContext.Provider>
  );
};
