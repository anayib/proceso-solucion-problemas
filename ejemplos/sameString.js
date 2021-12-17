/*
Enunciado

Dados dos arreglos arreglo1 y arreglo2, escribe una función arraysIguales que retorne true si los elementos de cada arreglo representan la misma cadena de texto (string), de lo contrario retorna false.

Una cadena de texto es representada por un arreglo, si los elementos del arreglo concatenados en orden forman una cadena de texto.

arreglo1[i] y arreglo2[i] incluyen solamente letras en minúscula de la a-z.

Input: arreglo1 = ["ab", "c"], arreglo2 = ["a", "bc"]
Output: true

Input: arreglo1 = ["a", "cb"], arreglo2 = ["ab", "c"]
Output: false

Input: arreglo1  = ["abc", "d", "defg"], arreglo2 = ["abcddefg"]
Output: true

___

PACER

Problema:

Escribir una función que retorne true si las cadenas de texto formadas por los elementos de cada uno de los dos arreglos pasados como parámetro son iguales, si no retorna false.

Datos de entrada: arreglos
Dato de salida: boleano

Ejemplos

["ab", "c"] // "abc"
["a", "bc"] // "abc"
true

["a", "cb"] // "acb"
["ab", "c"] // "abc"
false

["abc", "d", "defg"] // "abcddefg"
["abcddefg"]         // "abcddefg"
true

Utilizaré cadenas de texto para hacer la comparación.

Los elementos de los arreglos son sólo minúsculas.


Algoritmo:

definir una función arraysIguales que recibe dos arreglos como parámetros arreglo1 y arreglo2
  definir una variable cadena1 y asignarle como valor la concatenación de los elementos del arreglo arreglo1
  definir una variable cadena2 y asignarle como valor la concatenación de los elementos del arreglo arreglo2
  declarar una variable resultado
  asignar a la variable resultado la comparación de igualdad de cadena1 con cadena2
  retornar resultado.
*/

function arraysIguales(arreglo1, arreglo2) {
  const cadena1 = arreglo1.join("");
  const cadena2 = arreglo2.join("");
  let resultado;

  resultado = (cadena1 === cadena2);

  return resultado;
};

console.log(arraysIguales(["ab", "c"], ["a", "bc"] )) // true
console.log(arraysIguales(["a", "cb"], ["ab", "c"] )) // false
console.log(arraysIguales(["abc", "d", "defg"],["abcddefg"]  )) // true


//Refactorización

console.log("Refactor");

function arraysIgualesRef(arreglo1, arreglo2) {
  return arreglo1.join("") === arreglo2.join("");
}

console.log(arraysIguales(["ab", "c"], ["a", "bc"] )) // true
console.log(arraysIgualesRef(["a", "cb"], ["ab", "c"] )) // false
console.log(arraysIgualesRef(["abc", "d", "defg"],["abcddefg"]  )) // true

