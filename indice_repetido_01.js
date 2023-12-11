"use strict";
//solucion by: "JmaycolV 🏴BO"
function findFirstRepeated(gifts) {
    //lista auxiliar
    let listaRe = [];
    //ciclo for que recorre la lista 
    //y compara cada elemento con la lista auxiliar
    for (let i of gifts) {
        if (listaRe.includes(i)) {
            return i;
        }
        else {
            //sumamos los valores no repetidos para el siguiente ciclo
            listaRe.push(i);
        }
    }
    //retornamos -1 si todos los valores no se repiten
    return -1;
}
//CASOS DE PRUEBA 
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número
const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
