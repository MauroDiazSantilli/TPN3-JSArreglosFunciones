let lado1 = lado2 = 0
let perimetro = 0
lado1 = peticion()
lado2 = peticion()
realizarPerimetro(lado1, lado2)

function peticion(){
    return parseFloat(prompt("Escriba la longitud de dos lados distintos de un rectangulo:"))
}

function realizarPerimetro(a, b){
 let perimetro = 2 * (a + b)
 document.write("El perimetro de un rectangulo de lados "+a+" y "+b+" es "+perimetro)
}