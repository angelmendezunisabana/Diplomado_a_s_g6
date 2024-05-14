import { PizzaPersonalizadaBuilder } from "./PizzaPersonalizadaBuilder";
import { Pizzeria } from "./Pizzeria";


// Ejemplo de uso
const builder = new PizzaPersonalizadaBuilder();
const director = new Pizzeria(builder);
// delgada, gruesa, integral
director.pizzaBuilder.buildMasa("delgada");
//pequeño, mediano, grande
director.pizzaBuilder.buildTamañoPorción("");
//  queso, pepperoni, jamón, champiñones, pimientos, cebolla, aceitunas y piña.
director.pizzaBuilder.addIngrediente({ nombre: "jamón", cantidad: 2 });
director.pizzaBuilder.buildCoberturaAdicional(false);
const pizzaPersonalizada = director.getPizza();
console.log("sale pizza", pizzaPersonalizada);