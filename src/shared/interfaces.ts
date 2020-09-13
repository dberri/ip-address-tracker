export interface Info {
  label: string,
  value: string,
}

export interface ApiResponse {
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

export interface Position {
  lat: number,
  lng: number
}