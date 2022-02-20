import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>;

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9seWtoYXR1biIsImEiOiJja3p1bnRmaWo0ZGZnMm9xcmljdHczY2M2In0.l1mjgPSk6SKGR_SmXOXXfg";

const MapDirection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);

  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default MapDirection;
