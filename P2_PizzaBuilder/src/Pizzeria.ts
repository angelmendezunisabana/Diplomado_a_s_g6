import { Pizza } from "./Pizza";
import { PizzaBuilder } from "./PizzaBuilder";

export class Pizzeria {
    pizzaBuilder: PizzaBuilder;

    constructor(builder: PizzaBuilder) {
        this.pizzaBuilder = builder;
    }

    /* construirPizza(): void {
        this.pizzaBuilder.buildTamañoPorción("grande");
        this.pizzaBuilder.buildMasa("delgada");
        this.pizzaBuilder.addIngrediente("peperoni");
        this.pizzaBuilder.buildCoberturaAdicional(true);
    } */

    getPizza(): Pizza {
        return this.pizzaBuilder.getPizza();
    }
}