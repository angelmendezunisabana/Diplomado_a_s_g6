import { ReportGenerationStrategy } from '../Interface/caso3_strategy_interface';
export class HTMLReportStrategy implements ReportGenerationStrategy {
  generateReport(data: any): string {
    // Construir el contenido HTML del informe
    let htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Informe</title>
      </head>
      <body>
        <h1>Informe de la empresa</h1>
        <p><strong>Nombre de la empresa:</strong> ${data.companyName}</p>
        <p><strong>Ingresos:</strong> ${data.revenue}</p>
        <p><strong>Gastos:</strong> ${data.expenses}</p>
        <p><strong>Ganancia:</strong> ${data.profit}</p>
        <h2>Lista de empleados:</h2>
        <ul>
    `;

    // Agregar la lista de empleados al contenido HTML
    data.employees.forEach((employee: any) => {
      htmlContent += `<li>${employee.name} - ${employee.position}</li>`;
    });

    // Cerrar las etiquetas HTML
    htmlContent += `
        </ul>
      </body>
      </html>
    `;

    // Devolver el contenido HTML generado
    return htmlContent;
  }
}
