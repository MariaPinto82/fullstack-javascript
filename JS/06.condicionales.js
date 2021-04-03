'use strict';

/* Condicional If :
- Si A es igual a B entonces haz algo
*/

let edad1 = 8;
let edad2 = 12;


// Si pasa esto
if(edad1 > edad2){
    // Ejecuta esto
    console.log("Edad 1 es mayor que edad 2")
}else{
    console.log("La edad 1 es inferior") 
}



let age = 19;
let nombre = "Maria Pinto";

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

// Ejemplo con el opeador de Negacion: 
let year = 2018;
if(year != 2016){
    console.log("El año no es el 2016")
}


// Ejemplo con el operador AND;
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era portModerna")
}


// Ejemplo con el operador OR;
if(year === 2008 || (year >= 2018 && year ===2028)){
    console.log("El año acaba en 8")
}else{
    console.log("Año no registrado")
}