// Definimos la interfaz común para los datos geográficos
interface GeographicData {
    load(): void;
    process(): void;
}

// Clase concreta que representa los datos en formato GeoJSON
class GeoJSONData implements GeographicData {
    load(): void {
        console.log("Cargando datos GeoJSON...");
    }

    process(): void {
        console.log("Procesando datos GeoJSON...");
    }
}

// Clase concreta que representa los datos en formato KML (de la biblioteca de terceros)
class KMLData {
    loadKML(): void {
        console.log("Cargando datos KML...");
    }

    processKML(): void {
        console.log("Procesando datos KML...");
    }
}

// Adaptador que traduce las operaciones de GeoJSON a KML
class GeoJSONToKMLAdapter implements GeographicData {
    private kmlData: KMLData;

    constructor() {
        this.kmlData = new KMLData();
    }

    load(): void {
        this.kmlData.loadKML();
        console.log("Convirtiendo datos GeoJSON a KML...");
    }

    process(): void {
        this.kmlData.processKML();
        console.log("Convirtiendo datos GeoJSON a KML...");
    }
}

// Cliente
class Application {
    private geographicData: GeographicData;

    constructor(geographicData: GeographicData) {
        this.geographicData = geographicData;
    }

    // Método para cargar y procesar los datos
    processData(): void {
        this.geographicData.load();
        this.geographicData.process();
    }
}

// Uso del adaptador para integrar la biblioteca incompatible
const geoJSONData = new GeoJSONData(); // Datos en formato GeoJSON
const adapter = new GeoJSONToKMLAdapter(); // Adaptador para trabajar con datos en formato KML
const app = new Application(adapter); // Aplicación que utiliza el adaptador

// La aplicación utiliza el adaptador para cargar y procesar los datos
app.processData();
