let total = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let suma = [0,0,0,0,0,0,0,0,0,0,0,0,0]

for(i = 1; i<=50; i++)
  tirar();

 imprimir();

 function tirar(){
  let d1 = Math.floor(1 + Math.random() * 6);
  let d2 = Math.floor(1 + Math.random() * 6);
  suma[d1+d2]++;
  total[d1+d2] += d1+d2;
}

function imprimir(){
  let resultado="";
  for(let i=2; i<=12; i++){
    resultado += ("El numero "+ i +" ocurrió : "+ suma[i] +" veces y resultó en: " + total[i] + "<br/>");
  }
  
  document.write(resultado);
}





