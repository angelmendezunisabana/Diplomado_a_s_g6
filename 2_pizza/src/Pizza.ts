import { Ingrediente } from "./model/Ingrediente";

export class Pizza {
    tamanio: string = "";
    masa: string = "";
    ingredientes: Ingrediente[] = [];
    coberturaAdicional: boolean = false;

    constructor() {
    }

    calcularCosto(): number {
        return 0;
    }
}