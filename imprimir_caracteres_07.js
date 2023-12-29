"use strict";
//solucion by: "JmaycolV 🏴BO"
function drawGift(size, symbol) {
    if (size == 1)
        return '#\n';
    //inicializamos un string vacio
    const filas = [];
    //construimos las valores por defecto en cada caso que son el inicio, medio y final
    //se usa interpolaccion de varriables y los metodos repeat para los elementos repetidos y padStart para los espacios
    //inicio
    filas[0] = '#'.repeat(size).padStart(size * 2 - 1);
    //medio
    filas[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`;
    //final
    filas[size * 2 - 2] = '#'.repeat(size);
    //reccorremos por fila para los otros valores
    for (let fila = 1; fila < size - 1; fila++) {
        //definimos el draft que sera la linea a pushear
        let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(fila - 1)}#`;
        //agregamos el draft a las posiciones inicciales y  los espacios iniciales para las primeras filas que tiene espacio
        filas[fila] = draft.padStart(size * 2 - 1, ' ');
        //agregamos el draft a las posiciones finales
        filas[size * 2 - 2 - fila] = draft;
    }
    //retornamos el string unido en una respuesta separada por el salto de linea \n y el salto de linea extra al final
    return filas.join('\n').concat('\n');
}
drawGift(5, '*');
//resultado esperado
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/
//analisis de la solucion, verlo de otra manera inicialmente
/*
#####
#***##
#***#*#
#***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/ 
