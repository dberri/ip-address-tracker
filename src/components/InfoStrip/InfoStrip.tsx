import React from 'react'
import './InfoStrip.css';

interface Info {
  label: string,
  value: string,
}

interface Props {
  data: Info[]
}

const InfoStrip: React.FC<Props> = ({ data }) => {
  const info = data.map((info, idx) => (
    <div key={idx} className="InfoStrip-data">
      <h2 className="InfoStrip-dataTitle">
        {info.label}
      </h2>
      <p className="InfoStrip-dataParagraph">
        {info.value}
      </p>
    </div>
  ));

  return (
    <div className="InfoStrip">
      {info}
    </div>
  );
}

export default InfoStrip;