'use strict';

/* Muestre todos los numeros divisores de un numero introducido en un prompt */
let numero = parseInt(prompt("Mete un numero", 0));

for (let i = 1; i <= numero; i++) {

    if (numero%i == 0) {
        console.log("Divisor: " + i);
    }
}