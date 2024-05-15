import { GeoDataInterface } from "../Interface/GeoDatainterface";
import { KMLData } from "../KMLData/KMLData";

export class KMLtoJsonAdapter implements GeoDataInterface {
    private kmlData: KMLData;

    constructor () {
        this.kmlData = new KMLData();
    }
    reader(): void{
            console.log("Leyendo fuente de datos KML");
    }

    parseData(): void {
        this.kmlData.processKML();
        console.log("Formateando datos KML to Json");
    }

    drawMap(): void {
        console.log("Generando Mapa con KML to Json ... ");
    }
}