import './main.css'
import { 
  Viewer, 
  Ion, 
  Terrain, 
  createOsmBuildingsAsync,
  Cartesian3,
  Color
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const env = await import.meta.env

const cesiumAPIKey = env.VITE_CESIUM_API_KEY
    
Ion.defaultAccessToken = cesiumAPIKey;
// points to #container html element
const viewer = new Viewer('cesiumContainer', {
  terrain: Terrain.fromWorldTerrain(),
});

const osmBuildings = await createOsmBuildingsAsync();
viewer.scene.primitives.add(osmBuildings);

// This is one of the first radar samples collected for our flight.
const dataPoint = { longitude: -122.38985, latitude: 37.61864, height: -27.32 };
// Mark this location with a red point.
const pointEntity = viewer.entities.add({
  description: `First data point at (${dataPoint.longitude}, ${dataPoint.latitude})`,
  position: Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
  point: { pixelSize: 10, color: Color.RED }
});
// Fly the camera to this point.
viewer.flyTo(pointEntity);