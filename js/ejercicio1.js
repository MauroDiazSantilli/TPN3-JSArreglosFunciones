let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write("Los meses del año son: <ul>");
for (let i = 0; i < mes.length; i++){
document.write("<li>" + mes[i] + "</li>");
}
document.write("</ul>")