/* Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

const caracteresSN = ()=> {
    let caracter = prompt("Ingrese un caracter S/N");
    caracter = caracter.toLowerCase();
    (caracter === "s" || caracter === "n") ? document.write("CORRECTO") : document.write("INCORRECTO");
}
caracteresSN();