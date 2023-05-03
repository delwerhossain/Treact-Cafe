import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapSection = () => {
    return (
        <LoadScript
        googleMapsApiKey="22.35896745584489, 91.82143916986124"
      >
        <GoogleMap
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
};

export default MapSection;