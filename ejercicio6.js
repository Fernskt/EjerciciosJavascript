/* Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */

var numero = parseFloat(prompt("Ingrese algun numero"));

var resultado = (numero == 0)?"El numero es 0":(numero % 2 == 0)?"El número es PAR":"El número es IMPAR";

document.write(resultado);