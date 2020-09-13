import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Map from './components/AppMap/AppMap';
import { Position } from './shared/interfaces';

function App() {
  const [position, setPosition] = useState<Position>({
    lat: 0,
    lng: 0
  })

  return (
    <div className="App">
      <Header setPosition={setPosition} />
      <Map position={position} />
    </div>
  );
}

export default App;
