"use strict";
//Primera solucion pero tuve problema con devolver los valores que faltaban de la lista original
// function findNaughtyStep(original: string, modified: string) {
//     const listaOriginal = original.split('');
//     const listaModified = modified.split('');
//     const modificados = listaModified.filter((letra) =>
//     !listaOriginal.includes(letra));
//     return modificados;
// }
//solucion by: "JmaycolV 🏴BO"
function findNaughtyStep(original, modified) {
    //Con math max calculamos la palabra mas larga
    const maxPalabra = Math.max(original.length, modified.length);
    //primera condicional para comprobar si ambos string son distintos , si son iguales retorna vacio
    if (original !== modified) {
        //Ciclo para recorrer los strings y recorrer segun el string mas largo
        for (let i = 0; i < maxPalabra; i++) {
            //condicional para empezar a comprobar el indice 
            if (original[i] !== modified[i]) {
                /*condicional que comprueba el indice siguiente, si ve igualdad significa que el primer
                indice es distinto y lo retornara de lo contrario retornara el indice modificado y asi en casa ciclo*/
                if (original[i + 1] === modified[i]) {
                    return original[i];
                }
                else {
                    return modified[i];
                }
            }
        }
    }
    return "";
}
const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'
//caso 2
const original2 = "stepfor";
const modified2 = "stepor";
console.log(findNaughtyStep(original2, modified2)); // 'f'
const original3 = "abcde";
const modified3 = "abcde";
console.log(findNaughtyStep(original3, modified3)); // ''
