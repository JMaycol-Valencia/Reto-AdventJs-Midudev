//CAJA X 10 REGALOS = {a}
//PALET X 5 CAJAS = [a] 
//REGALO EN BOLSA = (bbbb) X 4
//solucion by: "JmaycolV 🏴BO"
function organizeGifts(gifts:string):string {
    //separamos los numeros con letra
    const matches = gifts.match(/\d*\w/g)
    
    //caso de vacio o cero coincidencias
    if (!matches) return gifts
    

    for(let match of matches){
      //extraemos el numro de la coincidenciaa
      let count = Number(match.slice(0,-1))
      //extraemos el caracter de laa coincidencia  
      let gift = match.at(-1)!
      //inicializamos el valor que alojara nuestro resultado
      let draft = ""
      
      //dividimos el numerro entre 50
      const palets = Math.floor(count / 50)
      //actualizamos el valor 
      count -= palets * 50
      //dividimos el numero entre 10
      const boxes = Math.floor(count / 10)
      //actualizamos el valor
      count -= boxes * 10
      
      //imprimimos el resultado segun el caso que exista en el numero encontrado
      if (palets) draft += `[${gift}]`.repeat(palets)
      if (boxes) draft += `{${gift}}`.repeat(boxes)
      if (count) draft += `(${gift.repeat(count)})`
      
      //remplazamos el string original por el armado en draft
      gifts = gifts.replace(match, draft)
    }
    
    return gifts
  }
  
  
  organizeGifts(`71a11b`)
  //console.log(organizeGifts(`76a11b`))
  //[a]{a}{a}(a){b}(b) //rresultado esperrado