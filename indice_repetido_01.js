//solucion by: "JmaycolV 🏴BO"
function findFirstRepeated(gifts) {
    //lista auxiliar
    var listaRe = [];
    //ciclo for que recorre la lista 
    //y compara cada elemento con la lista auxiliar
    for (var _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        var i = gifts_1[_i];
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
var giftIds = [2, 1, 3, 5, 3, 2];
var firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
var giftIds2 = [1, 2, 3, 4];
var firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número
var giftIds3 = [5, 1, 5, 1];
var firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
