// Interfaz para la estrategia de generación de informes
export interface ReportGenerationStrategy {
    generateReport(data: any): string;
  }
