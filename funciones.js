function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');

}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();


}

function obtenerContactos()
{
    let hoja=SpreadsheetApp.openById('1Uuh-RHqLaiQ1mGCHUbBYiuGhSKMrdE8hrvMY2-uIHlM').getActiveSheet();
    let datos=hoja.getDataRange().getValues();
    return datos;
}