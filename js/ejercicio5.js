let texto = prompt("Introduzca un texto");

function informe(){
    if(texto == texto.toUpperCase()){
        alert("El texto '" + texto + "' esta en mayuscula" );
    } else if(texto == texto.toLowerCase()){
        alert("El texto '" + texto + "' esta en minuscula");
    } else{
        alert("El texto '" + texto + "' esta en mayuscula y minuscula");
    }
      return texto
}

informe();