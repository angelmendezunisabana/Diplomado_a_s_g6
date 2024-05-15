// Contexto que utiliza la estrategia para generar un informe
import { ReportGenerationStrategy } from '../Interface/caso3_strategy_interface';
export class ReportGenerator {
    private strategy: ReportGenerationStrategy;

    constructor(strategy: ReportGenerationStrategy) {
      this.strategy = strategy;
    }

    generateReport(data: any): string {
      return this.strategy.generateReport(data);
    }
  }
