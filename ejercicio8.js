
var cont = 0;
var suma = 0;
let opcion = -1;
let numMax = null;
let numMin = null;

while (opcion != 0) {
    
    opcion = parseInt(prompt("Ingrese números enteros positivos"));
    if(numMax < opcion){
        numMax = opcion;
    }
    if(numMin > opcion && numMin !== 0){
        numMin = opcion;
    }

    suma+=opcion;
    cont++;

}

document.write(`El máximo número ingresado es: ${numMax} <br>`)
document.write(`El mínimo número ingresado es: ${numMin} <br>`)
document.write(`El promedio de los números ingresados es: ${(suma/cont).toFixed(2)} <br>`)