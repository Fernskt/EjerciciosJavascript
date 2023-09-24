/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/

let numeros = [];
let numero;


do{
    numero = parseInt(prompt("Por favor ingrse muchos numeros! (pero con 0 salis)"))
    if(!isNaN(numero) || numero === 0){
        numeros.push(numero);
    }else{
        alert("Ingrese un numero valido por favor");
    }

}while(numero !== 0);

if(numeros.length == 0){
    alert("Pero no ingresaste nada, pa");
}else{
    numeros = numeros.filter(num => num !== 0);

}

if(numeros.length == 0){
    alert("No se ingresaron numeros distintos a 0")
}else{
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    let suma = numeros.reduce((a,b) => a+b,0);
    let promedio = suma / numeros.length;

    document.write(`El numero maximo que pusiste es ${max}<br>
El numero minimo que pusiste es ${min}<br>
El numero promedio de todos los numeros que pusiste es: ${promedio.toFixed(2)}`);
}


