import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = (props: any) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <h1>Google map</h1>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "YOUR_API_KEY_GOES_HERE",
})(GoogleMap);
