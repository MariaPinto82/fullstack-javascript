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



var age = 19;
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
    console.log(nombre+" tiene "+age+" años, es mayor de edad");


    if(age <= 33){
        console.log("Todavia eres milenial")
    }else if(age >= 70){
        console.log("Ya eres un anciano")
    }else{
        console.log("Ya no eres un milenial")
    }


}else{
    // Es menor de edad
    console.log(nombre+" tiene "+age+" años, es menor de edad")
}



/* Operadores logicos y relacionales:
- ==  (Es igual);
- === (Es estrictamente igual);
- != (Es distinto);
- !== (Es estrictamente distinto);
- < (menor);
- > (mayor);
- <= (menor o igual que...);
- >= (mayor o igual que ...);
- && (Operador and(y));
- || (Operador Or(o));
- ! (Operador not(no));
*/ 

