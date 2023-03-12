let ciudades = [];
while (true) {
  let interaccion = prompt('Ingrese el nombre de una ciudad:');
  if (interaccion === null) break;
  ciudades.push(interaccion);
}

document.write(`<h3>El arreglo de ciudades es:</h3><p>${ciudades}</p>`);
document.write(`<h3>La longitud del arreglo es:</h3><p>${ciudades.length}</p>`);
document.write(`<h3>El primer, tercer y ultimo elementos son:</h3><p>${ciudades[0]}, ${ciudades[2]} y ${ciudades[ciudades.length - 1]} </p>`);

ciudades.push('Paris');
document.write(`<h3>Se añade Paris al final:</h3><p>${ciudades}</p>`);

let segPos = ciudades[1];
document.write(`<h3>El elemento de la segunda posición es:</h3><p>${segPos}</p>`);

ciudades[1] = 'Barcelona';
document.write(`<h3>Se reemplaza el segundo elemento con Barcelona:</h3><p>${ciudades}</p>`);

