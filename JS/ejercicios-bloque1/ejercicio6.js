'use strict';
/* Haz un programa que nos diga si un numero es par o impar.
1. Tiene que tener una ventana Prompt;
2. Si no metemos un numero valido, que nos vuelva a pedir meter los datos;
3. Despues de lo anterior, mostrar si el numero es par o impar;
 */

let numero = parseInt(prompt("Introduce un numero", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero", 0));
}


if(numero % 2 == 0){
    alert("Es un numero par ")
}else{
    alert("Es un numero impar")
}