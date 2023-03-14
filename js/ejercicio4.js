let numeroE = prompt("Introduzca un numero entero")

let resultado = parOimpar(numeroE)
alert("El numero "+ numeroE + " es " + resultado)

function parOimpar(numeroE){
    if(numeroE % 2 == 0){
        return "par"
    } 
    
    else{
        return "impar"
    }
}