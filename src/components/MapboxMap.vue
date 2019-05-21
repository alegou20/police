<template>
  <div class="fillheight">
    <div class="fullscreen" id="map"></div>
  </div>
</template>

<script>
import axios from "axios";

import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  props: ["movements"],
  data() {
    return {
      axiosDirections: null,
      axiosGeocoding: null,
      axiosMovementRegistration: null,
      axiosBillAdministration: null,
      accessToken:
        "pk.eyJ1Ijoic3ZoMTk5NyIsImEiOiJjamZ4bmF0azQweWF1MnprZG02ZTB6dWFsIn0.-058LEniBsf5Tcoy12SVhQ",
      map: null,
      mapConfig: {
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [10, 51], // starting position [lng, lat]
        zoom: 5 // starting zoom
      },

      geocoder: null
      // movements
    };
  },
  methods: {
    /**
     * Draws a route on the map, based on a list of coords
     */
    drawRoute(movements) {
      // remove old route
      this.removeRoute();

      let coordinates = movements.map(x => x.coordinate);

      this.map.addLayer({
        id: "currentRoute",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-width": 2,
          "line-color": "#007cbf"
        }
      });

      this.map.addSource("currentPoint", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coordinates[coordinates.length - 1]
              }
            }
          ]
        }
      });

      this.map.addLayer({
        id: "currentPoint",
        source: "currentPoint",
        type: "symbol",
        layout: {
          "icon-image": "car-15",
          "icon-rotate": ["get", "bearing"],
          "icon-rotation-alignment": "map",
          "icon-allow-overlap": true,
          "icon-ignore-placement": true
        }
      });
    },

    removeRoute() {
      if (this.map.getLayer("currentRoute"))
        this.map.removeLayer("currentRoute");

      if (this.map.getLayer("currentPoint"))
        this.map.removeLayer("currentPoint");

      if (this.map.getSource("currentPoint"))
        this.map.removeSource("currentPoint");
    },

    /**
     * Initialize mapbox map
     */
    initMap() {
      return new Promise((resolve, reject) => {
        let self = this;

        mapboxgl.accessToken = self.accessToken;

        self.map = new mapboxgl.Map(self.mapConfig);

        self.map.on("load", () => {
          resolve();
        });
      });
    },

    /**
     * creates an axios base instance
     */
    initAxios() {
      this.axiosDirections = axios.create({
        baseURL: "https://api.mapbox.com/directions/v5/",
        timeout: 10000
      });

      this.axiosGeocoding = axios.create({
        baseURL: "https://api.mapbox.com/geocoding/v5/",
        timeout: 10000
      });

      this.axiosMovementRegistration = axios.create({
        baseURL: "http://movementregistration.nl",
        timeout: 10000
      });

      this.axiosBillAdministration = axios.create({
        baseURL: "http://billadministration.nl",
        timeout: 10000
      });
    }
  },

  watch: {
    movements(movements) {
      if (movements) {
        this.drawRoute(movements);
      } else {
        this.removeRoute();
      }
    }
  },

  async mounted() {
    await this.initMap();
    this.initAxios();

    if (this.movements) this.drawRoute(this.movements);
  }
};
</script>

<style>
.fullscreen {
  width: 100%;
  height: 100%;
  position: relative;
}

#map {
  position: absolute;
}
</style>

