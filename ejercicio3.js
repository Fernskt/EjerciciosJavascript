/* Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo. */

const edad = parseInt(prompt("Ingresa tu edad"));

(edad>18) ? document.write("Usted es mayor de edad") : document.write("Usted es menor de edad");