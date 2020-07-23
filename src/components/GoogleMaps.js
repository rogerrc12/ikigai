import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const GoogleMaps = props => {
  return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: -12.125978, lng: -77.047615 }}
      />
  )
}

// <Marker position={{ lat: -12.113978, lng: -77.047615 }} />
// 'AIzaSyD1Ds1rJsnKvy9babSVYPIg5cXrMwGJ_Bo'

export default withScriptjs(withGoogleMap(GoogleMaps));
