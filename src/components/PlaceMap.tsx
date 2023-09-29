import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupInfo from "./PopupInfo";
import useGeoLocation from "hooks/userLocation";

const PlaceMap = () => {
  const [position, setPosition] = useState({
    lat: -1.286389,
    lng: 36.817223,
  });

  const location = useGeoLocation();

  const listing = {
    id: 2,
    name: "Spacious House near Campus",
    location: "456 University Avenue",
    type: "rental",
    bedrooms: 3,
    bathrooms: 2,
    regularPrice: 15000,
    offer: true,
    discountedPrice: 13000,
    people: 0,
    img: "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-[400px]"
    >
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=miqXZcvOx8t01C3g4maN"
      />

      <Marker position={position}>
        <Popup>
          <PopupInfo listing={listing} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default PlaceMap;
