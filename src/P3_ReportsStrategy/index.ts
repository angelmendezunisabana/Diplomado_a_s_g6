import { ReportGenerator } from "./Context/caso3_strategy_class";
import { ExcelReportStrategy } from './Reportes/caso3_strategy_excelReport'
import { HTMLReportStrategy } from './Reportes/caso3_strategy_htmlReport'
import { PDFReportStrategy } from './Reportes/caso3_strategy_pdfReport'

// Ejemplo de uso
const data = {
    companyName: "UniSabada Diplomado S.A.",
    revenue: 1000000,
    expenses: 500000,
    profit: 500000,
    employees: [
      { name: "Empleado 1", position: "Desarrollador" },
      { name: "Empleado 2", position: "Diseñador" },
      { name: "Empleado 3", position: "Gerente de Proyecto" }
    ]
  };

const pdfReportGenerator = new ReportGenerator(new PDFReportStrategy());
const pdfReport = pdfReportGenerator.generateReport(data);
console.log(pdfReport); // Output: Reporte en formato PDF generado

const excelReportGenerator = new ReportGenerator(new ExcelReportStrategy());
const excelReport = excelReportGenerator.generateReport(data);
console.log(excelReport); // Output: Reporte en formato Excel generado

const htmlReportGenerator = new ReportGenerator(new HTMLReportStrategy());
const htmlReport = htmlReportGenerator.generateReport(data);
console.log(htmlReport); // Output: Reporte en formato HTML generado
