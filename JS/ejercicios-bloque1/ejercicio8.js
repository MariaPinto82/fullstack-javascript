'use strict';
/**
 * Calculadora:
 * 1. Que pida dos numeros por pantalla;
 * 2. Si metes mal los datos que los vuelva a pedir;
 * 3. Muestra en el cuerpo de la pagina, en una alerta, y por consola el resultado de:
 * (sumar, restar, multiplicar y dividir) las dos cifras que se pidieron anteriormente;
 */

let numero1 = parseInt(prompt("Introduce el primer numero"));
let numero2 = parseInt(prompt("Introduce el segundo numero"));

while(numero1 < 0 || numero2 <  0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero"));
    numero2 = parseInt(prompt("Introduce el segundo numero"));
}
let resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La multiplicacion es: "+(numero1*numero2)+ " <br/>"+
                "La division es: "+(numero1/numero2)+ " <br/>";


let resultadoCDM = "La suma es: "+(numero1+numero2)+" \n"+
                "La resta es: "+(numero1-numero2)+" \n"+
                "La multiplicacion es: "+(numero1*numero2)+ " \n"+
                "La division es: "+(numero1/numero2)+ " \n";               
document.write(resultado);
alert(resultadoCDM);
