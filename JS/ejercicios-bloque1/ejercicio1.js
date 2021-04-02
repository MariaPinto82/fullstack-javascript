'use strict';
/* Hacer un programa que pida dos numeros y que nos diga cual es el mayor y cual es el menor o si son iguales */
/* Plus: Si los números son letras, son menores o iguales a 0, nos vuelva a pedir que escribamos los datos correctamente;*/


var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer número", 0));
    numero2 = parseInt(prompt("Introduce el segundo número", 0));
}
if (numero1 === numero2) {
    alert("Los números son iguales")
} else if (numero1 > numero2) {
    alert("El nùmero mayor es:" + numero1);
    alert("El nùmero menor es:" + numero2)
} else if (numero2 > numero1) {
    alert("El nùmero mayor es:" + numero2);
    alert("El nùmero menor es:" + numero1);
} else {
    alert("Introduce números correctos");
}




