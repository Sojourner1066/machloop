import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";

// Create the map
const map = new Map({
  basemap: "topo-vector"
});

// Create the view
const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-3.771882, 52.687300],
  zoom: 11
});

// --- Camping Locations ---
const campingRenderer = new SimpleRenderer({
  symbol: new PictureMarkerSymbol({
    url: "/camping.svg",
    width: "24px",
    height: "24px"
  })
});

const campingLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/CampingLocations/FeatureServer/0",
  renderer: campingRenderer,
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{facilities}"
  }
});
map.add(campingLayer);

// --- Parking Locations ---
const parkingRenderer = new SimpleRenderer({
  symbol: new PictureMarkerSymbol({
    url: "/parking.svg",
    width: "24px",
    height: "24px"
  })
});

const parkingLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/ParkingLocations/FeatureServer/0",
  renderer: parkingRenderer,
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{spots}"
  }
});
map.add(parkingLayer);

// --- Viewing Locations ---
const viewRenderer = new SimpleRenderer({
  symbol: new PictureMarkerSymbol({
    url: "/view.svg",
    width: "24px",
    height: "24px"
  })
});

const viewingLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/ViewingLocations/FeatureServer/0",
  renderer: viewRenderer,
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{site_info}"
  }
});
map.add(viewingLayer);

// --- RAF Bases ---
const rafRenderer = new SimpleRenderer({
  symbol: new PictureMarkerSymbol({
    url: "/fighter-jet.svg",
    width: "24px",
    height: "24px"
  })
});

const rafLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/RAF_Bases/FeatureServer/0",
  renderer: rafRenderer,
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{aircraft}"
  }
});
map.add(rafLayer);