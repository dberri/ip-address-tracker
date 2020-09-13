import React from 'react'
import './AppMap.css';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Position } from '../../shared/interfaces';

const zoomLevel = 10;

const AppMap = ({ position }: { position: Position }) => {
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