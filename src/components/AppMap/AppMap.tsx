import React, { useEffect, useState } from 'react'
import './AppMap.css';
import {
  Map, TileLayer, Marker
} from 'react-leaflet';

const zoomLevel = 12;

const AppMap = () => {
  const [position, setPosition] = useState({
    lat: 51.505,
    lng: -0.09
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({
        lat: latitude,
        lng: longitude,
      })
    })
  }, [])

  return (
    <Map className="Map" zoom={zoomLevel} minZoom={zoomLevel} maxZoom={zoomLevel} zoomControl={false} center={position}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </Map>
  );
}
export default AppMap;