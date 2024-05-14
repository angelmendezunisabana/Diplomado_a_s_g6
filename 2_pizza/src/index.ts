import { PizzaPersonalizadaBuilder } from "./PizzaPersonalizadaBuilder";
import { Pizzeria } from "./Pizzeria";


// Ejemplo de uso
const builder = new PizzaPersonalizadaBuilder();
const pizzeria = new Pizzeria(builder);
// delgada, gruesa, integral
pizzeria.pizzaBuilder.buildMasa("delgada");
//pequeño, mediano, grande
pizzeria.pizzaBuilder.buildTamañoPorción("mediano");
//  queso, pepperoni, jamón, champiñones, pimientos, cebolla, aceitunas y piña.
pizzeria.pizzaBuilder.addIngrediente({ nombre: "jamón", cantidad: 2 });
pizzeria.pizzaBuilder.addIngrediente({ nombre: "cebolla", cantidad: 1 });
pizzeria.pizzaBuilder.buildCoberturaAdicional(false);
const pizzaPersonalizada = pizzeria.getPizza();
console.log("sale pizza", pizzaPersonalizada);