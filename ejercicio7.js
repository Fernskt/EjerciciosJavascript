
let valorLimitePositivo = parseInt(prompt("Ingrese un valor límite positivo"));
let suma = 0;
while (suma <= valorLimitePositivo) {
    
    let num = parseInt(prompt("Ingrese un numero"));
    suma+=num;

}
document.write(`Ha superado el valor inicial de ${valorLimitePositivo} con ${suma}`)