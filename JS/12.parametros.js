'use strict'
// Parametros

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("*******************************************")
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1 + numero2));
    document.write("Resta: " + (numero1 - numero2));
    document.write("Multiplicacion: " + (numero1 * numero2));
    document.write("Division: " + (numero1 / numero2));
    document.write("*******************************************"); 
}


function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero2, numero2)
    }else{
        porPantalla(numero1, numero2)
    }

    return true;
}


calculadora(1, 4)
calculadora(2, 5, true)
calculadora(78, 8, true)


