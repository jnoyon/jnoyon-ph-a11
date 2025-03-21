import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <div className="w-full">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="max-h-60 md:max-h-none">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <b> Stock Room </b> <br /> Birunia, Bhaluka, Mymensingh.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
