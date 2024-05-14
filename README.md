# Universidad de la Sabana 
## Diplomado Arquitectura de Software - Grupo 6
### Actividad 1 - Patrones de diseño

- Carlos Leonardo Bravo Revelo
- Brian Santiago Correa Ramirez
- Angel Nicolas Mendez Parra
- Camilo Andrés Camargo Oliveros
- Fabio Andrés Sánchez Bernal


# Consideraciones

Lenguaje seleccionado **TypeScrypt**
> **Instalación**
> - 1. Clonar reposotorio
> - 2. 

> **Ejecución del proyecto**
> - 1. Clonar repositorio
> - 2. 

## Ejercicio 1 : Sistema de Gestión de Tareas

Patrón seleccionado **Command**

```mermaid
classDiagram
    class Clase {
	    <<interface>>
        + method1()
        + method2()
    }
```    
## Ejercicio 2. Construcción de una Orden Personalizada de Pizza

Patrón seleccionado: **Builder**

```mermaid
classDiagram
    class Pizzeria{
      -PizzaBuilder pizzaBuilder
      +getPizza()
    }
    class Pizza{
      -string tamanio
      -string masa
      -Ingredientes[] ingredientes
      -boolean coberturaAdicional
      -calcularCosto(): number
    }
    class PizzaBuilder{
      <<interface>>
      +buildTamañoPorción(tamaño: string): void
      +buildMasa(masa: string): void
      +addIngrediente(ingrediente: Ingrediente): void
      +buildCoberturaAdicional(cobertura: boolean): void
      +getPizza(): Pizza
    }

    class PizzaPersonalizadaBuilder{
      -Pizza: pizza;
      +buildTamañoPorción(tamanio: string): void
      +buildMasa(masa: string): void
      +addIngrediente(ingrediente: Ingrediente): void
      +buildCoberturaAdicional(cobertura: boolean): void 
      +getPizza(): Pizza
    }


 Pizzeria <|.. PizzaPersonalizadaBuilder
 Pizzeria *-- PizzaBuilder 
 PizzaBuilder <|.. Pizza
 PizzaBuilder <|.. PizzaPersonalizadaBuilder
```  

## Ejercicio 3. La creación de un sistema de generación de informes personalizados con diferentes formatos de salida

Patrón Strategy 

```mermaid
classDiagram
    class ReportGenerationStrategy {
        +generateReport(data: any): void
    }

    class PDFReportGenerationStrategy {
        +generateReport(data: any): void
    }

    class ExcelReportGenerationStrategy {
        +generateReport(data: any): void
    }

    class HTMLReportGenerationStrategy {
        +generateReport(data: any): void
    }

    class ReportGenerator {
        -strategy: ReportGenerationStrategy
        +setStrategy(strategy: ReportGenerationStrategy): void
        +generateReport(data: any): void
    }

    ReportGenerator --|> ReportGenerationStrategy
    ReportGenerator *-- ReportGenerationStrategy : has a
    PDFReportGenerationStrategy --|> ReportGenerationStrategy
    ExcelReportGenerationStrategy --|> ReportGenerationStrategy
    HTMLReportGenerationStrategy --|> ReportGenerationStrategy
```  


## Ejercicio 4. Problema: Integración de Biblioteca Incompatible

Patrón Adapter : 

```mermaid
classDiagram
    class GeographicData {
	    <<interface>>
        + load()
        + process()
    }
    class GeoJSONData {
        + load()
        + process()
    }
    class KMLData {
        + loadKML()
        + processKML()
    }
    class GeoJSONToKMLAdapter {
        - kmlData: KMLData
        + load()
        + process()
    }
    class Application {
        - geographicData: GeographicData
        + processData()
    }

    GeographicData <|.. GeoJSONData
    GeographicData <|.. GeoJSONToKMLAdapter
    GeographicData <|.. KMLData

    Application --> GeographicData

```