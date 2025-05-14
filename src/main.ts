import './main.css'
import { Viewer, Ion, Terrain, createOsmBuildingsAsync } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const env = await import.meta.env

const cesiumAPIKey = env.VITE_CESIUM_API_KEY
    
Ion.defaultAccessToken = cesiumAPIKey;
// points to #container html element
const viewer = new Viewer('cesiumContainer', {
  terrain: Terrain.fromWorldTerrain(),
});

const osmBuildings = await createOsmBuildingsAsync();
viewer.scene.primitives.add(osmBuildings);;