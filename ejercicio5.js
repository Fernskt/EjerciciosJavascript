/* Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */
let num1 = parseFloat(prompt("Ingrese el primer numero"))
let num2 = parseFloat(prompt("Ingrese el segundo numero"))

let opcion = prompt("Qué desea hacer? Sumar (S) Restar (R) Multiplicar (M) Dividir(D)");

opcion = opcion.toLowerCase();

switch(opcion){
    case "s":
        document.write(`La suma de los números es: ${num1+num2}`);
        break;
    case "r":
        document.write(`La resta de los números es: ${num1-num2}`);
        break;
    case "m":
        document.write(`La multiplicacion de los numeros es: ${num1*num2}`);
        break;
    case "d": 
        document.write(`La division de los números es: ${num1/num2}`)
        break;
    default:
        document.write("Opcion Invalida")   
}