'use strict';
/* Hacer un programa que pida dos numeros y que nos diga cual es el mayor y cual es el menor o si son iguales */ 

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

console.log(numero1, numero2);

if(numero1 === numero2){
    alert("Los números son iguales")
}else if(numero1 > numero2){
    alert("El nùmero mayor es:" + numero1);
    alert("El nùmero menor es:" + numero2)
}else if(numero2 > numero1){
    alert("El nùmero mayor es:" + numero2);
    alert("El nùmero menor es:" + numero1);
}else{
    alert("Introduce números correctos");
}

