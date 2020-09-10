import React from 'react'
import './InfoStrip.css';

const InfoStrip = () => {
  return (
    <div className="InfoStrip">
      <div className="InfoStrip-data">
        <h2 className="InfoStrip-dataTitle">
          IP Address
        </h2>
        <p className="InfoStrip-dataParagraph">
          Test
        </p>
      </div>
      <div className="InfoStrip-data">
        <h2 className="InfoStrip-dataTitle">
          Location
        </h2>
        <p className="InfoStrip-dataParagraph">
          Test
        </p>
      </div>
      <div className="InfoStrip-data">
        <h2 className="InfoStrip-dataTitle">
          Timezone
        </h2>
        <p className="InfoStrip-dataParagraph">
          Test
        </p>
      </div>
      <div className="InfoStrip-data">
        <h2 className="InfoStrip-dataTitle">
          ISP
        </h2>
        <p className="InfoStrip-dataParagraph">
          Test
        </p>
      </div>
    </div>
  );
}

export default InfoStrip;