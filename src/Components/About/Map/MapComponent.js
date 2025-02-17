import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";

import { useGeographic } from "ol/proj.js";
import { OSM } from "ol/source";

function MapComponent() {
  const osm_layer = new TileLayer({
    source: new OSM(),
    title: "osm",
    visible: true,
  });

  useGeographic();
  const mapRef_main = useRef(null);

  useEffect(() => {
    const map_main = new Map({
      target: mapRef_main.current,
      layers: [osm_layer],
      view: new View({
        center: [20.900421, 52.218211],
        zoom: 10,
      }),
    });

    return () => {
      if (map_main) {
        map_main.setTarget(null);
      }
    };
  });

  return (
    <div
      style={{
        marginTop: "10px",
        borderTop: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div className="about_header" style={{ marginTop: "20px" }}>
        Curently located in Warsaw, Poland
      </div>
      <div
        ref={mapRef_main}
        style={{
          width: "98%",
          height: "50vh",
          margin: "10px",
        }}
      />
    </div>
  );
}

export default MapComponent;
