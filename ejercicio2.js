/* Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. */

const pi = Math.PI;

let radio = parseFloat(prompt("Ingrese el valor del radio por favor"));

let area = pi * Math.pow(radio,2);
let perimetro = 2 * pi * radio;

document.write(`El área del circulo es: ${area.toFixed(2)} <br>`)
document.write(`El perímetro del circulo es: ${perimetro.toFixed(2)}`)