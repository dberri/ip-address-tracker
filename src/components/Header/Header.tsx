import React, { useState } from 'react'
import './Header.css';
import Form from '../Form/Form';
import InfoStrip from '../InfoStrip/InfoStrip';

interface Info {
  label: string,
  value: string,
}

interface ApiResponse {
  ip: string,
  location: {
    country: string,
    region: string,
    city: string,
    lat: number,
    lng: number,
    postalCode: string,
    timezone: string,
  },
  isp: string
}

interface Props {
  setPosition: Function
}

const data = [
  {
    label: "IP Address",
    value: ""
  },
  {
    label: "Location",
    value: ""
  },
  {
    label: "Timezone",
    value: ""
  },
  {
    label: "ISP",
    value: ""
  },
]

const Header: React.FC<Props> = ({ setPosition }) => {
  const [info, setInfo] = useState<Info[]>(data);

  const handleSubmittedData = (data: ApiResponse) => {
    setInfo([
      {
        label: "IP Address",
        value: data.ip
      },
      {
        label: "Location",
        value: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
      },
      {
        label: "Timezone",
        value: data.location.timezone
      },
      {
        label: "ISP",
        value: data.isp
      }
    ]);

    setPosition({
      lat: data.location.lat,
      lng: data.location.lng
    })
  }

  return (
    <header className="Header">
      <div className="Header-wrapper"></div>
      <div className="Header-form">
        <Form submitted={handleSubmittedData} />
      </div>
      <div className="Header-infoStrip">
        <InfoStrip data={info} />
      </div>
    </header>
  );
}

export default Header;