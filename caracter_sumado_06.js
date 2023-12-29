"use strict";
//solucion by: "JmaycolV 🏴BO"
function maxDistance(movements) {
    //separamos cada caracter en un elemento dentro de una lista
    let simbolos = movements.split('');
    //capturamos el primer caracter para comprobarlo
    const primer = simbolos[0];
    //comprobamos los casos para cambiar los caracateres por numeros
    if (primer == ">" || primer === "*") {
        simbolos = simbolos.map(simbolo => simbolo.replaceAll(">", "1"));
        simbolos = simbolos.map(simbolo => simbolo.replaceAll("*", "1"));
        simbolos = simbolos.map(simbolo => simbolo.replaceAll("<", "-1"));
    }
    if (primer == "<" || primer === "*") {
        simbolos = simbolos.map(simbolo => simbolo.replaceAll("<", "1"));
        simbolos = simbolos.map(simbolo => simbolo.replaceAll("*", "1"));
        simbolos = simbolos.map(simbolo => simbolo.replaceAll(">", "-1"));
    }
    //cambiamos el tipo de string a number
    let numeros = simbolos.map((s) => parseInt(s, 10));
    //sumamos los elementos de la lista
    let suma = numeros.reduce((t, numero) => t + numero);
    //retornamos el resultado
    return suma;
}
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2
const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2
const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
