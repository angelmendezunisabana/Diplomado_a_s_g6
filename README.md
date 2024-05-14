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

Patrón seleccionado: **Command**

```mermaid
classDiagram
    class Command {
	    <<interface>>
        + execute()
    }

    class CreateTaskCommand{
      - task: Task
      + execute()
    }

    class EditTaskCommand{
      - task: Task
      + execute()
    } 

    class DeleteTaskCommand{
      - task: Task
      + execute()
    }

    class CompleteTaskCommand{
      - task: Task
      + execute()
    }

    class CommandHistory{
      - history: Command[]
      + push()
      + pop()
    }

    class Task{
      - name: string
      - completed: bool
      + create()
      + edit()
      + delete()
      + complete()
    }


    class TaskManager{
      - history: CommandHistory
      + executeCommand(command)
      + undo()
    }

    Command <|-- CreateTaskCommand
    Command <|-- EditTaskCommand
    Command <|-- DeleteTaskCommand
    Command <|-- CompleteTaskCommand
    CommandHistory *-- Command
    TaskManager --> Command
    Task *-- TaskManager


```    
## Ejercicio 2. Construcción de una Orden Personalizada de Pizza

Patrón seleccionado **Patrón...**

```mermaid
classDiagram
    class Clase {
	    <<interface>>
        + method1()
        + method2()
    }
```  

## Ejercicio 3. La creación de un sistema de generación de informes personalizados con diferentes formatos de salida

Patrón seleccionado **Patrón...**

```mermaid
classDiagram
    class Clase {
	    <<interface>>
        + method1()
        + method2()
    }
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
