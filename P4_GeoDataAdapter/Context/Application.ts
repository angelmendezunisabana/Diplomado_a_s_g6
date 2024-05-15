import { GeoDataInterface } from "../Interface/GeoDatainterface";

export class Application {
    private geoData: GeoDataInterface;

    constructor(geoData: GeoDataInterface) {
        this.geoData = geoData;
    }

    public run() {
        this.geoData.reader();
        this.geoData.parseData();
        this.geoData.drawMap();
    }
} 