import GoogleMapReact from "google-map-react";
import React from 'react'

const Map = ({center,zoom}) => {
  return (
    <div className="map">
         <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
              </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
      lat: 42.3265,
      lng: -122.8756
  },
  zoom: 6
}

export default Map
