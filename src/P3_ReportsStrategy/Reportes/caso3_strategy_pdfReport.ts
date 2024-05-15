import { ReportGenerationStrategy } from '../Interface/caso3_strategy_interface';
export class PDFReportStrategy implements ReportGenerationStrategy {
  generateReport(data: any): string {
    // Crear un objeto PDFDocument (este ejemplo asume el uso de una biblioteca como PDFKit)
    const PDFDocument = require('pdfkit');
    const fs = require('fs');
    const doc = new PDFDocument();

    // Agregar contenido al documento PDF
    doc.fontSize(20).text('Informe de la empresa', { align: 'center' }).moveDown();
    doc.fontSize(16).text(`Nombre de la empresa: ${data.companyName}`).moveDown();
    doc.fontSize(16).text(`Ingresos: $${data.revenue}`).moveDown();
    doc.fontSize(16).text(`Gastos: $${data.expenses}`).moveDown();
    doc.fontSize(16).text(`Ganancia: $${data.profit}`).moveDown();
    doc.fontSize(16).text('Lista de empleados:').moveDown();
    data.employees.forEach((employee: any) => {
      doc.fontSize(14).text(`${employee.name} - ${employee.position}`);
    });

    // Guardar el documento PDF en un archivo
    const filename = 'Informe.pdf';
    doc.pipe(fs.createWriteStream(filename));
    doc.end();

    return `Informe en formato PDF generado: ${filename}`;
  }
}
