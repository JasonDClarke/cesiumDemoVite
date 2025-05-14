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
import rawFlightData from './rawFlightData.json'

const env = await import.meta.env

const cesiumAPIKey = env.VITE_CESIUM_API_KEY
    
Ion.defaultAccessToken = cesiumAPIKey;
// points to #container html element
const viewer = new Viewer('cesiumContainer', {
  terrain: Terrain.fromWorldTerrain(),
});

const osmBuildings = await createOsmBuildingsAsync();
viewer.scene.primitives.add(osmBuildings);

const flightData = rawFlightData

flightData
  .map(({ longitude, latitude, height }) => ({
    description: `Location: (${longitude}, ${latitude}, ${height})`,
    position: Cartesian3.fromDegrees(longitude, latitude, height),
    point: { pixelSize: 10, color: Color.RED }
  }))
  .forEach(entity => viewer.entities.add(entity));