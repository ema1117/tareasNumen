// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const auxArray = array;

  return auxArray[0];


}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const auxArray = array;

  return auxArray[array.length - 1];

}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;

}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let auxArray = []

 for(let i=0;i < array.length;i++){
     auxArray[i] = array[i] + 1; 

  }
  return auxArray;

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

    array.push(elemento)
   
  return array;



}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

   array.unshift(elemento)
   
  return array;

}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

   /*let  respuesta = palabras[0];

  for(let i=1;i < palabras.length;i++){

    respuesta = respuesta + " " + palabras[i] ; 

  }*/

  return palabras.join(" ");

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let respuesta

  if(array.indexOf(elemento) == -1){
    respuesta = false;
  }else{
      respuesta = true;
  } 

  return respuesta;



}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

 let  respuesta = 0;

  for(let i=0;i < numeros.length;i++){

    respuesta = respuesta + numeros[i] ; 

  }

  return respuesta;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let  respuesta = 0;

  /*
  for(let i=0;i < resultadosTest.length;i++){

    respuesta = respuesta + resultadosTest[i] ; 

  }
*/ 

  respuesta = resultadosTest.reduce((acumulador,elemento)=>acumulador + elemento,0) / resultadosTest.length;


  return respuesta;



}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let  respuesta = 0;

  /*for(let i=0;i < numeros.length;i++){

    if(respuesta < numeros[i]){
      respuesta = numeros[i];
    }

  }*/
  
  numeros.forEach(numero => {
      if(numero > respuesta){
        respuesta = numero
      }
    })

  return respuesta


}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:

  respuesta = 0;

  for(let i=0;i < arreglo.length;i++){

    if( arreglo[i] >19){
      respuesta++;
    }

  }

  return respuesta;


}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:


  respuesta = '';

   

    if( numeroDeDia  == 1 || numeroDeDia == 7 ){
      respuesta ='Es fin de semana';
    }else{
      respuesta ='Es dia Laboral';
    }

  

  return respuesta;


} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí  
  let respuesta;
  let str = n.toString()
   
  if(str.charAt(0) == '9'){
    return true
  }else{
    return false
  }

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
   
  /*
  for(let i=1;i < arreglo.length;i++){
    
    if( arreglo[i-1] === arreglo[i]  ){
      
      respuesta++;
    }

  }*/ 
  
  //encontre este metodo para simplificar la funcion
  if(arreglo.every(e => arreglo[0] == e)){
    return true;
  }else{
    return false;
  }

  

} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:



  let respuesta = [] ;

  //for(let i=0;i < array.length;i++){
    
  // if( array[i] === 'Enero'  || array[i] === 'Marzo' | array[i] === 'Noviembre'){
   //      respuesta.push(array[i]);
  //  }

 // }
    
  respuesta = array.filter(arreglos => {
    return arreglos === 'Enero'  || arreglos === 'Marzo' || arreglos === 'Noviembre';
  })

  if(respuesta.length == 3){
    return respuesta;
  }else{
    return  "No se encontraron los meses pedidos";
  }

    
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let respuesta = array.filter(array => array > 100) ;

  //for(let i=0;i < array.length;i++){
    
   // if( array[i] > 100  ){
      
    //   respuesta.push(array[i])
    //}

  //} 

  return respuesta;

}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
