import { Pizza } from "./Pizza";
import { Ingrediente } from "./model/Ingrediente";

export interface PizzaBuilder {
    buildTamañoPorción(tamaño: string): void;
    buildMasa(masa: string): void;
    addIngrediente(ingrediente: Ingrediente): void;
    buildCoberturaAdicional(cobertura: boolean): void;
    getPizza(): Pizza;
}