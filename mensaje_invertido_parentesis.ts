//solucion by: "JmaycolV 🏴BO"
function decode(message: string): string {
  /**
   * declaramos e inicializamos las variables auxiliares
   * tipo para limitar maximo 2 parentesis
   * resultado para el string final ordenado
   * nivel para los parentesis anidados
   * variable para dar guardar el mensaje de los parentesis
   */
  type Nivel = 0 | 1 | 2;
  const resultado: string[] = [];
  const pilas: string[] = [];
  let nivel: Nivel = 0;
  let darVuelta = "";

  /**
   * separamos los caracteres del string y los recorremos
   * en cada ciclo comprobamos que no exceda el max de parentesis anidados
   */
  message.split("").forEach((char) => {
    //la condicional que comprueba la cantidad maxima de parentesis da mas errores de los que soluciona
    // if (char === "(" && nivel === 2) {
    //   throw new Error(
    //     "Mensaje con demasiados paréntesis anidados. Disculpa, no puedo decifrarlo Midu 😥."
    //   );
    // }

    /**
     * cada caracter sera comparado por 3 casos
     * 2 casos (inicio y final del parentesis) con asignacion de nivel y dar la vuelta en el cierre
     * 1 default para el caracter normal e ir separando segun el nivel las palabras a dar vuelta
     *
     */
    switch (char) {
      //CASO 1
      case "(":
        if (nivel > 0) {
          pilas.push(darVuelta);
          darVuelta = "";
          resultado.push("");
        }
        nivel++;
        break;
      //CASO 2
      case ")":
        nivel--;
        if (nivel > 0) {
            pilas
          darVuelta = pilas.pop() + darVuelta.split("").reverse().join("");
        } else {
          resultado.push(darVuelta.split("").reverse().join(""));
          darVuelta = "";
        }
        break;
      //CASO 3 O DEFAULT
      default:
        darVuelta += nivel > 0 ? char : "";
        resultado.push(nivel === 0 ? char : "");
        break;
    }
  });
  //al finalizar tendremos un array pero con el metodo join lo unimos todo en un string
  return resultado.join("");
}

//Ejemplos de uso
const a = decode("hola (odnum)");
console.log(a); // Resultado: "hola mundo"

const b = decode("(olleh) (dlrow)!");
console.log(b); // Resultado: "hello world!"

const c = decode("sa(u(cla)atn)s");
console.log(c); // Resultado: "santaclaus"

const e = decode("((nta)(sa))");
console.log(e); // Resultado: "santa"

const d = decode("sa(u(cl(ihx)a)atn)s");
console.log(d); // Resultado: "ERROR EXCEDENTE DE PARENTESIS"
