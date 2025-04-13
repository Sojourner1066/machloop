// All necessary ArcGIS imports
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Locate from "@arcgis/core/widgets/Locate";
import Point from "@arcgis/core/geometry/Point";
import * as projection from "@arcgis/core/geometry/projection";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

// Create the map
const map = new Map({
  basemap: "topo-vector"
});

// Create the view
const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-1.65, 53.86],
  zoom: 6
});

// Define the label class for polygons
const labelClass = new LabelClass({
  labelExpressionInfo: { expression: "$feature.name" },
  symbol: {
    type: "text",
    color: "black",
    haloColor: "white",
    haloSize: 1,
    font: {
      family: "sans-serif",
      size: 12,
      weight: "bold"
    }
  },
  labelPlacement: "above-center"
});

// --- Machloop Area Layer ---
const polygonSymbol = new SimpleFillSymbol({
  color: [0, 120, 255, 0.2],
  outline: { color: [0, 120, 255, 1], width: 2 }
});

const machloopLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/MachLoop_Area/FeatureServer/0",
  renderer: new SimpleRenderer({ symbol: polygonSymbol }),
  outFields: ["*"],
  labelingInfo: [labelClass],
  labelsVisible: true,
  popupTemplate: {
    title: "Mach Loop Area",
    content: "This is the designated low-flying military training area."
  },
  maxScale: 200000
});
map.add(machloopLayer);

// Bookmark Widget (added after view is ready)
view.when(() => {
  const bookmarks = new Bookmarks({
    view: view,
    bookmarks: [
      {
        name: "Bluebell",
        viewpoint: {
          targetGeometry: new Point({ longitude: -3.738659, latitude: 52.729595, spatialReference: { wkid: 4326 } }),
          scale: 15000
        }
      },
      {
        name: "Bwlch",
        viewpoint: {
          targetGeometry: new Point({ longitude: -3.849614, latitude: 52.706927, spatialReference: { wkid: 4326 } }),
          scale: 15000
        }
      },
      {
        name: "Cad West",
        viewpoint: {
          targetGeometry: new Point({ longitude: -3.844979, latitude: 52.708969, spatialReference: { wkid: 4326 } }),
          scale: 15000
        }
      },
      {
        name: "Cad East",
        viewpoint: {
          targetGeometry: new Point({ longitude: -3.843717, latitude: 52.703611, spatialReference: { wkid: 4326 } }),
          scale: 15000
        }
      },
      {
        name: "Corris Craft Centre",
        viewpoint: {
          targetGeometry: new Point({ longitude: -3.850125, latitude: 52.654033, spatialReference: { wkid: 4326 } }),
          scale: 15000
        }
      }
    ]
  });
  view.ui.add(bookmarks, "top-right");
});

// Locate widget
const locateWidget = new Locate({
  view: view,
  useHeadingEnabled: false,
  goToOverride: (view, options) => {
    options.target.scale = 1500;
    return view.goTo(options.target);
  }
});
view.ui.add(locateWidget, "top-left");
