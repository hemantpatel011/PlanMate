import React, { useRef } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const LocationSearch = ({ onPlaceSelect }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_PLACE_API_KEY, //actual API key
    libraries,
  });

  const autocompleteRef = useRef(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (!place || !place.geometry) return;

    const location = {
      Place: place.name,
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    onPlaceSelect(location);
  };

  if (!isLoaded) return <p>Loading Autocomplete...</p>;

  return (
    <Autocomplete
      onLoad={(ref) => (autocompleteRef.current = ref)}
      onPlaceChanged={handlePlaceChanged}
    >
      <input
        type="text"
        placeholder="Search destination..."
        className="border border-gray-300 rounded px-4 py-2 w-full shadow-md"
      />
    </Autocomplete>
  );
};

export default LocationSearch;
