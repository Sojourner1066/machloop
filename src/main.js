import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import Locate from "@arcgis/core/widgets/Locate";
import Point from "@arcgis/core/geometry/Point";
import * as projection from "@arcgis/core/geometry/projection";
import Graphic from "@arcgis/core/Graphic";


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
    url: `${import.meta.env.BASE_URL}camping.svg`,
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
    url: `${import.meta.env.BASE_URL}parking.svg`,
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
    url: `${import.meta.env.BASE_URL}view.svg`,
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
    url: `${import.meta.env.BASE_URL}fighter-jet.svg`,
    width: "24px",
    height: "24px"
  })
});

const rafLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/RAF_Bases/FeatureServer/0",
  renderer: rafRenderer,
  outFields: ["*"],
  popupTemplate: {
    title: "RAF Base: {name}",
    content: (feature) => {
      const attrs = feature.graphic.attributes;
      const geom = feature.graphic.geometry;
      const lat = geom.latitude?.toFixed(6);
      const lon = geom.longitude?.toFixed(6);
  
      return `
        <div style="display: flex; gap: 12px;">
          <img src="${attrs.image_URL}" alt=" RAF Base Image" style="width: 100px; height: auto; border-radius: 6px; object-fit: cover;" />
          <div style="font-size: 14px; line-height: 1.5;">
            <ul style="padding-left: 18px; margin: 0;">
              <li><strong>ICAO Code:</strong> ${attrs.ICAO_Code || "N/A"}</li>
              <li><strong>IATA Code:</strong> ${attrs.IATA_Code || "N/A"}</li>
              <li><strong>Elevation:</strong> ${attrs.elevation || "N/A"}</li>
              <li><strong>Runway:</strong> ${attrs.runway || "N/A"}</li>
            </ul>
          </div>
        </div>
  
        <div style="margin-top: 16px; font-size: 14px; line-height: 1.6;">
          ${attrs.description || ""}
        </div>
      `;
    }
  }
});
map.add(rafLayer);

const locateWidget = new Locate({
  view: view,
  useHeadingEnabled: false, // optional, shows phone orientation
  goToOverride: (view, options) => {
    options.target.scale = 1500; // zoom level when locating
    return view.goTo(options.target);
  }
});

view.ui.add(locateWidget, "top-left");

view.when(() => {
  document.getElementById("nearestBtn").addEventListener("click", async () => {
    // 1. Get user location
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      await projection.load();

      const userPoint = new Point({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        spatialReference: { wkid: 4326 }  // WGS84
      });
      
      const projectedUserPoint = projection.project(userPoint, view.spatialReference);

      // 2. Query viewing locations
      const result = await viewingLayer.queryFeatures({
        where: "1=1",
        outFields: ["*"],
        returnGeometry: true
      });

      if (!result.features.length) {
        alert("No viewing locations found.");
        return;
      }

      // 3. Find the nearest one
      let closestFeature = null;
      let minDistance = Infinity;



      result.features.forEach((feature) => {
        // console.log("User point:", userPoint);
        // console.log("Feature geometry:", feature.geometry);
        const distance = geometryEngine.distance(projectedUserPoint, feature.geometry, "meters");
        if (distance < minDistance) {
          minDistance = distance;
          closestFeature = feature;
        }
      });

      if (closestFeature) {
        // 4. Zoom to and open popup
        view.goTo({
          target: closestFeature.geometry,
          zoom: 15
        });

        view.openPopup({
          features: [closestFeature],
          location: closestFeature.geometry
        });
      }
    }, (error) => {
      alert("Failed to get your location.");
      console.error(error);
    });
  });
});