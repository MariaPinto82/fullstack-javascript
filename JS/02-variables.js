/* Variables :
- Una variable es un contenedor de información.
- Las variables deben definirse bien, para no crear confusiones. 
*/ 
'use strict'; // Usar el modo estricto de JavaScript

let pais = "España";
let continente = "Europa";
let antiguedad = 2021;
let pais_y_continente = pais+ ' '+continente; // Concatenados

pais = "Mexico"; // Cambiar el contenido a la variable
continente = "LatinoAmerica"

console.log(pais, continente, antiguedad);
alert(pais_y_continente)

