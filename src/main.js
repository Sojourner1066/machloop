import Map from "https://js.arcgis.com/4.29/esri/Map.js";
import MapView from "https://js.arcgis.com/4.29/esri/views/MapView.js";

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-122.4194, 37.7749], // example: San Francisco
  zoom: 12
});