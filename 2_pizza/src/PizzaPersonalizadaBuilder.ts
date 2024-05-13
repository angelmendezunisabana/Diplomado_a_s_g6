import { Pizza } from "./Pizza";
import { PizzaBuilder } from "./PizzaBuilder";
import { Ingrediente } from "./model/Ingrediente";

export class PizzaPersonalizadaBuilder implements PizzaBuilder {
    pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    buildTamañoPorción(tamanio: string): void {
        this.pizza.tamanio = tamanio;
    }

    buildMasa(masa: string): void {
        this.pizza.masa = masa;
    }

    addIngrediente(ingrediente: Ingrediente): void {
        this.pizza.ingredientes.push(ingrediente);
    }

    buildCoberturaAdicional(cobertura: boolean): void {
        this.pizza.coberturaAdicional = cobertura;
    }

    getPizza(): Pizza {
        return this.pizza;
    }
}