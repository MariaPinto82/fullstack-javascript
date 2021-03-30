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



//var age = 34;
//var nombre = "Maria Pinto";

/* Operadores relacionales:
- Mayor: >
- Menor: <if(age >= 18){
    // Es mayor de edad
    console.log(nombre+" tiene "+age+" años, es mayor de edad")

    if(age <= 33){
        console.log("Todavia eres milenial")
    }else if(age >= 70){
        console.log("Ya no eres milenial")
    }

}else{
    // Es menor de edad
    console.log(nombre+" tiene "+age+" años, es menor de edad")
}
 que: <=
- Igual: ==
- Distinto: !=
*/ 

var edad = 18;
var nombre = "Maria"


if(edad){
    // Es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");


    if(edad <= 33){
        console.log("Todavia eres milenial")
    }else if(edad >= 70){
        console.log("Eres un anciano")
    }else{
        console.log("Ya no eres milenial")
    }


}else{
    // Es menor de edad 
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}
