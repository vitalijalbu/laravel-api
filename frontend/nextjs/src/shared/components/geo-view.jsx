import { IconMap } from "@tabler/icons-react";
import { Button, Result } from "antd";
import React from "react";
import { useGeolocated } from "react-geolocated";

const GeoView = () => {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    getPositionError,
  } = useGeolocated();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Result
        icon={<IconMap fontSize={30} className="m-auto" />}
        title="Geolocalizzazione"
        subTitle={
          !isGeolocationAvailable
            ? "La geolocalizzazione non è supportata dal tuo browser"
            : !isGeolocationEnabled
            ? "Geolocalizzazione non attiva"
            : coords
            ? `Posizione attuale: lat: ${coords.latitude}, lng: ${coords.longitude}`
            : "Recupero della posizione..."
        }
      />
      <div className="mt-4 text-center">
        <Button type="primary" onClick={() => window.location.reload()}>
          Riprova
        </Button>
      </div>
    </div>
  );
};

export default GeoView;
