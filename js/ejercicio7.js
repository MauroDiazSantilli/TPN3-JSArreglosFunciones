function tablaMult() {
    let numero = prompt("Ingrese un número del 1 al 10:");
    
    if (isNaN(numero) || numero < 1 || numero > 10) {
      alert("Error: es necesario ingresar un número del 1 al 10.");
      return;
    }
    
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    
    alert(resultado);
  }
  
  tablaMult();
