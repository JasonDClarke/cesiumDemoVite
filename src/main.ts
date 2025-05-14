import './main.css'
import { Viewer, Ion } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const env = await import.meta.env

const cesiumAPIKey = env.CESIUM_API_KEY
    
Ion.defaultAccessToken = cesiumAPIKey;
// points to #container html element
const viewer = new Viewer('container');