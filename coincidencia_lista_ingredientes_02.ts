//solucion by: "JmaycolV 🏴BO"
function manufacture(gifts : string[], materials : string) : string[] {
    //retornamos la lista modificada con filter
    return gifts.filter((gift)=>
        //cada palabra de cada regalo sera separada en una lista
        gift.split('').every((letra)=>
            //cada letra de las lista nueva sera comparada con la palabra de materiales
            materials.includes(letra))
    );
  };

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
const lista01 = manufacture(gifts, materials); // ["tren", "oso"]
console.log(lista01);

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'
const lista02 = manufacture(gifts2, materials2); // ["puzzle"]
console.log(lista02);

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'
const lista03 = manufacture(gifts3, materials3); // []
console.log(lista03);
