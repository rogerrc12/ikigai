import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

const GoogleMaps = props => {
  return (
    <div id="map" style={{ height: "85vh", width: "100%" }}>
      <Map
        initialCenter={{ lat: -12.125978, lng: -77.047615 }}
        zoom={17}
        google={props.google}
      >
        <Marker position={{ lat: -12.113978, lng: -77.047615 }} />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({ apiKey: process.env.MAPS_KEY })(GoogleMaps)
