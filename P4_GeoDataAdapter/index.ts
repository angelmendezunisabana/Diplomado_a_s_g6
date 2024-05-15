import { GeoJsonData } from "./GeoData/GeoJsonData";
import { KMLtoJsonAdapter } from "./Adapter/KMLtoJsonAdapter";
import { Application } from "./Context/Application";


const viewMap = new GeoJsonData("/SRC");

const appJson = new Application(viewMap);

appJson.run();

const viewMapKML = new KMLtoJsonAdapter();

const appKML = new Application(viewMapKML);

appKML.run();