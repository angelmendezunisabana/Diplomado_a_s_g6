import { GeoDataInterface } from "../Interface/GeoDatainterface";

export class GeoJsonData implements GeoDataInterface
{
    private src: string;

    constructor (dataSrc: string)
    {
        this.src = dataSrc;

    }

    reader(){
        if (this.src == null || this.src == undefined || this.src == ""){
            console.log("Fuente de datos no especificada");
        }else {
            console.log("Leyendo fuente de datos GeoJson : " + this.src);
        }
    }

    parseData() {
        console.log("Formateando datos Src");
    }

    drawMap() {
        console.log("Generando Mapa con datos Json ... ");
    }
}

