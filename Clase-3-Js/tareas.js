// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  let respuesta 

  if (x > y){
    respuesta = x
  }else if (y > x){
    respuesta = y
  }else{
    respuesta = x
  }

  return respuesta

}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  let respuesta = "";

  if(edad >= 18 ){
    respuesta = "Allowed"
  }else{
    respuesta = "Not allowed"
  }

  return respuesta
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch(status){
    case 1 :
      return "Online";
    case 2: 
      return "Away";
    default:
      return "Offline"; 
  }

}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  switch(idioma){
    case "aleman":
      return "Guten Tag!"
    case "mandarin":
      return "Ni Hao!"
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";

  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.

  switch(color){
    case "blue":
      return "This is blue"
    case "red":
      return "This is red"
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";

  }



}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta;
  if(numero == 10 || numero == 5){
    respuesta = true
  }else{
    respuesta = false;
  }
  return respuesta;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta;
  if(numero < 50 && numero > 20){
    respuesta = true
  }else{
    respuesta = false;
  }
  return respuesta;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let respuesta
  if(Number.isInteger(numero)){
    respuesta = true
  }else{
    respuesta = false
  }

  return respuesta


}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  let respuesta = "";

  if((numero % 3) ==  0){
    respuesta = "fizz";
  }

  if((numero % 5) ==  0){
    respuesta += "buzz";
  } 

  if(respuesta == ""){
    respuesta = numero;
  }

  return respuesta;

}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:

  if( num1 < 0 ||  num2 < 0 || num3 < 0){
    respuesta = "Hay negativos";
  }else if( num1 == 0 ||  num2 == 0 || num3 == 0){
    respuesta = "Error";
  }else if(   num3 > num2 && num3 > num1){
    respuesta = num3 + 1 ;  
  }else if( num1 > 0 && num1 > num2 && num1 > num3){
    respuesta = "Número 1 es mayor y positivo";
  }else{
    respuesta = false;
  }

  return respuesta;


}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí:
  let respuesta;
  if(valor == true){
    respuesta = "Soy verdadero"
  }else if (valor == false){
    respuesta = "Soy falso"
  }else{
    respuesta = "";
  }

  return respuesta


}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:
  let respuesta;
  if(numero  > 99 && numero < 1000){
    respuesta = true
  }else{
    respuesta = false;
  }

  return respuesta

}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
  let aux = 0;

  for(i = 1; i <= numero; i++){
    if((numero % i) == 0){
      aux++;
    }

  }

  if (aux == 2 && numero != 0 && numero != 1){
    respuesta = true;
  }else {
    respuesta = false;
  }

  return respuesta
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:

  let result = numero;
  let i = 0;

  do {     
    i++;
    result = result + 5;
  } while (i < 8);

  return result;

}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};