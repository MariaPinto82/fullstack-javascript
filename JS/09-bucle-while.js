'use strict';

// Bucle While
var año = 2021;

while(año <= 2051){
    // Ejecuta esto
    console.log(año);


    if(año == 2000){
        break;
    }
    año--;   // Cuando llegue a 2000 el bucle se detendra
}


// Bucle Do While;

var year = 30;

do{
    alert("Solo cuando sea diferente a 18")
    year--;
}while(year > 25);
