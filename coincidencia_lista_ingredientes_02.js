//solucion by: "JmaycolV 🏴BO"
function manufacture(gifts, materials) {
    //retornamos la lista modificada con filter
    return gifts.filter(function (gift) {
        //cada palabra de cada regalo sera separada en una lista
        return gift.split('').every(function (letra) {
            //cada letra de las lista nueva sera comparada con la palabra de materiales
            return materials.includes(letra);
        });
    });
}
;
var gifts = ['tren', 'oso', 'pelota'];
var materials = 'tronesa';
var lista01 = manufacture(gifts, materials); // ["tren", "oso"]
console.log(lista01);
var gifts2 = ['juego', 'puzzle'];
var materials2 = 'jlepuz';
var lista02 = manufacture(gifts2, materials2); // ["puzzle"]
console.log(lista02);
var gifts3 = ['libro', 'ps5'];
var materials3 = 'psli';
var lista03 = manufacture(gifts3, materials3); // []
console.log(lista03);
