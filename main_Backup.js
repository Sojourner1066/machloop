import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import Locate from "@arcgis/core/widgets/Locate";
import Point from "@arcgis/core/geometry/Point";
import * as projection from "@arcgis/core/geometry/projection";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";

// Define the label class
const labelClass = new LabelClass({
  labelExpressionInfo: {
    expression: "$feature.name"
  },
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
  labelPlacement: "always-horizontal"
});

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

// --- Machloop Area ---
const polygonSymbol = new SimpleFillSymbol({
  color: [0, 120, 255, 0.2], // semi-transparent blue
  outline: {
    color: [0, 120, 255, 1],
    width: 2
  }
});

const machloopLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/MachLoop_Area/FeatureServer/0",
  renderer: new SimpleRenderer({ symbol: polygonSymbol }),
  outFields: ["*"],
  labelingInfo: [labelClass],
  labelsVisible: true,  // Must be true to show labels
  popupTemplate: {
    title: "Mach Loop Area",
    content: "This is the designated low-flying military training area."
  },
  maxScale: 200000  // Optional: show only when zoomed out past 1:50,000
});
map.add(machloopLayer);

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
  minScale: 200000,
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
  minScale: 200000,
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
  minScale: 200000,
  renderer: viewRenderer,
  outFields: ["*"],
  popupTemplate: {
    title:"  Site Name: {name}",
    content: (feature) => {
      const attrs = feature.graphic.attributes;
      const town = attrs.Nearest_Town || "Unknown";
      const info = attrs.site_info || "No additional information provided.";
      const w3w = attrs.What3Words;
  
      // Strip leading slashes if they exist (e.g. ///word.word.word)
      const w3wClean = w3w ? w3w.replace(/^\/+/, "") : null;
      const w3wLink = w3wClean
        ? `<a href="https://what3words.com/${w3wClean}" target="_blank" style="color:#005e95;">
             ${w3w}
           </a>`
        : "<em>Not available</em>";
  
      return `
        <div style="font-size: 14px; line-height: 1.6;">
          <strong>Nearest Town:</strong> ${town}<br>
          <strong>Site Info:</strong><br>
          <div style="margin: 4px 0 10px;">${info}</div>
          <strong>What3Words:</strong> ${w3wLink}
        </div>
      `;
    }
  }
});
map.add(viewingLayer);

// --- Viewing Locations ---
const sightingRenderer = new SimpleRenderer({
  symbol: new PictureMarkerSymbol({
    url: `${import.meta.env.BASE_URL}plane.svg`,
    width: "24px",
    height: "24px"
  })
});
const imageLayer = new FeatureLayer({
  url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/MachLoop_Image_Collector_3_view/FeatureServer/0",
  minScale: 200000,
  renderer: sightingRenderer,
  outFields: ["*"],
  popupTemplate: {
    title: "📷 Aircraft Sighting",
    content: async (feature) => {
      const layer = feature.graphic.layer;
      const objectId = feature.graphic.attributes.objectid;
  
      const attachments = await layer.queryAttachments({
        objectIds: [objectId]
      });
  
      const photoUrl = attachments[objectId]?.[0]?.url;
  
      const attrs = feature.graphic.attributes;
      return `
        <div style="font-size: 14px; line-height: 1.6; max-width: 300px;">
          ${photoUrl ? `<img src="${photoUrl}" alt="Aircraft Photo" style="width: 100%; border-radius: 6px; margin-bottom: 8px;" />` : "<em>No image available</em>"}
  
          <strong>Date Taken:</strong> ${attrs.when_was_this_image_taken ? new Date(attrs.when_was_this_image_taken).toLocaleDateString() : "Unknown"}<br>
          <strong>Aircraft:</strong> ${attrs.please_identify_the_aircraft_in || "Unknown"}<br>
          <strong>Category:</strong> ${attrs.what_is_the_general_category_of || "Not specified"}<br>
          ${attrs.what_is_the_general_categ_other ? `<strong>Other Category:</strong> ${attrs.what_is_the_general_categ_other}<br>` : ""}
  
          <hr style="margin: 10px 0;">
          <div style="font-size: 12px; color: #666;">
            Uploaded by ${attrs.Creator || "anonymous"} on ${attrs.CreationDate ? new Date(attrs.CreationDate).toLocaleDateString() : "Unknown"}
          </div>
        </div>
      `;
    }
  }
});
map.add(imageLayer);

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
  labelingInfo: [labelClass],
  labelsVisible: false,  // Must be true to show labels
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
  const infoModal = document.getElementById("infoModal");
  const closeInfo = document.getElementById("closeInfo");

  closeInfo.addEventListener("click", () => {
    infoModal.style.display = "none";
  });

});


// Your Survey123 URL
const surveyURL = "https://arcg.is/0GXX1v2";
surveyBtn.addEventListener("click", () => {
  window.open(surveyURL, "_blank");

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
});
