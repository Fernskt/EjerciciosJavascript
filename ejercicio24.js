/* Escribir un programa de JavaScript que a través de un formulario calcule el radio de un circulo y lo muestre en el HTML.*/

function hacerRadioSi(){

    let radito = parseFloat(document.getElementById("radio").value);

    let aria = Math.PI * radito * radito;


    document.getElementById("resultado").textContent = aria.toFixed(1);

}