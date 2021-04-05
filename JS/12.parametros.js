'use strict'
// Parametros
function calculadora(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("*******************************************")
}
calculadora(5, 12);
calculadora(4, 18);
calculadora(15, 17);

for(let i = 0; i <= 10; i++ ){
    console.log(i);
    calculadora(i, 125);
}