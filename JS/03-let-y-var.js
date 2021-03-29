'use strict';

// Pruebas con let y var;

/* Diferencias entre Let y Var, esta en el alcance de las variables, mientras LET solo es para el ambito local,
VAR sirve para el ambito global, o sea se puede usar desde cualquier parte;
*/

// Ejemplo con Var;

var numero = 40;  // Valor 40;

if(true){
    var numero = 50; 
    console.log(numero)  // Valor 50;
}

console.log(numero); // Valor 50;

// Ejemplo con Let;

var texto = "Master JS Mariapinto.es";

console.log(texto) // Valor "master maria pinto"

if(true){
    let texto = "hola maria";
    console.log(texto) // Valor "hola maria"
}

console.log(texto); // Valor "master maria pinto"