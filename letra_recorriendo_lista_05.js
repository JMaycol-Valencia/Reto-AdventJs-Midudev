"use strict";
//solucion by: "JmaycolV 🏴BO"
function cyberReindeer(road, time) {
    const camino = [road];
    let lastChar = ".";
    //recorremos el string segun el tiempo
    for (let interaccion = 1; interaccion < time; interaccion++) {
        //en el tiempo 5 replazamos
        if (interaccion === 5) {
            road = road.replaceAll('|', '*');
        }
        //declaramos una constante para alojar las coincidencias para el cambio de la s (S. o S*)
        const matches = road.match(/S[\*\.]/g);
        //si existen matches
        if (matches) {
            //remplazamos la s. o s* por .s o *s 
            road = road.replace(matches[0], lastChar + 'S');
            //actualizamos el ultimo caracter por lo que encontramos en la posicion 0,1
            lastChar = matches[0][1];
        }
        //agregamos lo modificado a una lista de camino
        camino.push(road);
    }
    //retornamos el camino total
    return camino;
}
const road = 'S..|...|..';
const time = 10; // unidades de tiempo
console.log(cyberReindeer(road, time));
