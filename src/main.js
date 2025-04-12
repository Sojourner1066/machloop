import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

// Create map
const map = new Map({
  basemap: "topo-vector"
});

// Create view
const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-3.771882, 52.687300],
  zoom: 11
});

// Viewing Locations
const viewingLocationsLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/ViewingLocations/FeatureServer/0",
  title: "Viewing Locations",
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{site_info}"
  }
});
map.add(viewingLocationsLayer);

// Parking Locations
const parkingLocationsLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/ParkingLocations/FeatureServer/0",
  title: "Parking Locations",
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{site_info}"
  }
});
map.add(parkingLocationsLayer);

// Camping Locations
const campingLocationsLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/CampingLocations/FeatureServer/0",
  title: "Camping Locations",
  outFields: ["*"],
  popupTemplate: {
    title: "{name}",
    content: "{site_info}"
  }
});
map.add(campingLocationsLayer);

// Flight Route (likely a polyline)
const flightRouteLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/FlightRoute/FeatureServer/0",
  title: "Flight Route",
  outFields: ["*"],
  popupTemplate: {
    title: "Flight Route",
    content: "Low flying jet route"
  }
});
map.add(flightRouteLayer);