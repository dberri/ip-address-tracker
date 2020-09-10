import React from 'react'
import './InfoStrip.css';

const data = [
  {
    label: "IP Address",
    value: "192.212.174.101"
  },
  {
    label: "Location",
    value: "Broolyn, NY 10001"
  },
  {
    label: "Timezone",
    value: "UTC -05:00"
  },
  {
    label: "ISP",
    value: "SpaceX Starlink"
  },
]

const InfoStrip = () => {
  return (
    <div className="InfoStrip">
      {data.map(info => (
        <div className="InfoStrip-data">
          <h2 className="InfoStrip-dataTitle">
            {info.label}
          </h2>
          <p className="InfoStrip-dataParagraph">
            {info.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default InfoStrip;