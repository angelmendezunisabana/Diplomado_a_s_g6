class ExcelReportStrategy implements ReportGenerationStrategy {
  generateReport(data: any): string {
    // Crear un nuevo libro de Excel
    const excelWorkbook = require('exceljs');
    const workbook = new excelWorkbook.Workbook();
    const worksheet = workbook.addWorksheet('Informe');

    // Definir las columnas y agregar los datos al worksheet
    worksheet.columns = [
      { header: 'Nombre de la empresa', key: 'companyName' },
      { header: 'Ingresos', key: 'revenue' },
      { header: 'Gastos', key: 'expenses' },
      { header: 'Ganancia', key: 'profit' },
      { header: 'Nombre del empleado', key: 'name' },
      { header: 'Posición del empleado', key: 'position' }
    ];

    // Agregar los datos al worksheet
    worksheet.addRow({
      companyName: data.companyName,
      revenue: data.revenue,
      expenses: data.expenses,
      profit: data.profit
    });

    // Agregar la lista de empleados
    data.employees.forEach((employee: any) => {
      worksheet.addRow({
        name: employee.name,
        position: employee.position
      });
    });

    // Guardar el archivo Excel
    const filename = 'Informe.xlsx';
    workbook.xlsx.writeFile(filename)
      .then(() => {
        console.log(`Informe en formato Excel generado: ${filename}`);
      })
      .catch((error: any) => { // Especificamos el tipo del parámetro error
        console.error('Error al guardar el archivo Excel:', error);
      });

    return `Informe en formato Excel generado: ${filename}`;
  }
}
