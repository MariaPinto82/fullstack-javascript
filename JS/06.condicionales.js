'use strict';

/* Condicional If :
- Si A es igual a B entonces haz algo
*/

var edad1 = 8;
var edad2 = 12;


// Si pasa esto
if(edad1 > edad2){
    // Ejecuta esto
    console.log("Edad 1 es mayor que edad 2")
}else{
    console.log("La edad 1 es inferior") 
}



var age = 18;
var nombre = "Maria Pinto";

/* Operadores relacionales:
- Mayor: >
- Menor: <
- Mayor o igual que: >=
- Menor o igual que: <=
- Igual: ==
- Distinto: !=
*/ 

if(age >= 18){
    // Es mayor de edad
    console.log(nombre+" tiene "+age+" años, es mayor de edad")
}else{
    // Es menor de edad
    console.log(nombre+" tiene "+age+" años, es menor de edad")
}