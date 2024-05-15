// Contexto que utiliza la estrategia para generar un informe
class ReportGenerator {
    private strategy: ReportGenerationStrategy;
  
    constructor(strategy: ReportGenerationStrategy) {
      this.strategy = strategy;
    }
  
    generateReport(data: any): string {
      return this.strategy.generateReport(data);
    }
  }