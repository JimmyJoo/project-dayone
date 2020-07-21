import { useReducer } from 'react';
import { mapInitState, mapReducer } from '../Reducer/mapReducer';

const useMap = () => {
  const [mapState, dispatch] = useReducer(mapReducer, mapInitState);

  const setMap = (map) => {
    const payload = { map };
    dispatch({ type: 'SET_MAP', payload });
  };

  const setPlaces = (places) => {
    console.log('useMap()...setPlaces');

    const payload = { places };
    dispatch({ type: 'SET_PLACES', payload });
  };

  const setPagination = (pagination) => {
    console.log('useMap()...setPagination');

    const payload = pagination;
    dispatch({ type: 'SET_PAGINATION', payload });
  };

  const setSearchVisible = () => {
    console.log('useMap()...setSearchVisible');

    const payload = { isSearchVisible: true };
    dispatch({ type: 'SET_SEARCH_VISIBLE', payload });
  };

  const setSearchHidden = () => {
    console.log('useMap()...setSearchHidden');

    const payload = { isSearchVisible: false, isPlacesVisible: false };
    dispatch({ type: 'SET_SEARCH_HIDDEN', payload });
  };

  const setPlacesVisible = () => {
    console.log('useMap()...setPlacesVisible');

    const payload = { isPlacesVisible: true };
    dispatch({ type: 'SET_PLACES_VISIBLE', payload });
  };

  const setMessage = (message) => {
    console.log('useMap()...setMessage');

    const payload = { message };
    dispatch({ type: 'SET_MESSAGE', payload });
  };

  const updatePlace = (payload) => {
    console.log('useMap()...updatePlace');

    dispatch({ type: 'UPDATE_PLACE', payload });
  };

  const setClickPosition = (clickPosition, activeId, diaries) => {
    const sublist = diaries.filter(
      ({ location }) =>
        location.lat === clickPosition.lat &&
        location.lng === clickPosition.lng,
    );
    const payload = { clickPosition, activeId, sublist };
    dispatch({ type: 'SET_CLICK_POSITION', payload });
  };

  const setActiveId = (activeId, clickPosition, diaries) => {
    const payload = { activeId, clickPosition, diaries };
    dispatch({ type: 'SET_ACTIVE_ID', payload });
  };

  return {
    mapState,
    setMap,
    setPlaces,
    setPagination,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setMessage,
    updatePlace,
    setClickPosition,
    setActiveId,
  };
};

export default useMap;
