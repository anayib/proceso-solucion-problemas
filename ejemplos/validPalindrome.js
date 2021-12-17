/*
 Enunciado

Dada una cadena de texto s, determina si es palindroma, considerando sólo caracteres alphanuméricos e ignorando si es mayúscula o minúscula.

Casos

Input: s = "Atar a la rata, no es mas que atar a la rata"
Output: true

Input: s = "vamos makers!"
Output: false


PACE
___

PROBLEMA

Descripción:
Escribir una función que retorne true si la cadena de texto que recibe como parámetro se lee igual de izquierda a derecha y de derecha a izquierda.

Datos de entrada y salida:
Entrada: string
Salida: boolean

Ejemplos
Input: "Atar a la rata"
"ataralarata" === "ataralarata" // true
Input: "vamos makers!"
"vamosmakers" === "srekamsomav" // false

Estructura para manipulación de datos:
Array. Para implementar el reverse / string si haces un loop desde la última posición a la posición 0 del string original.


ALGORITMO
definir una función palindrome que recibe como parámetro una casena de texto s
  declarar una variable sMinuscula y asignarle el valor retornado de convertir todos los caracteres afabéticos de la cadena s en mínúsculas.
  declarar una variable sArray
  declarar una variable sInversa
  remover todos los carateres no alphanuméricos de la cadena sMinuscula con una expresión regular.
  asignar como valor de la variable sArray un array cuyos elementos son cada uno de los caracteres de sMinuscula
  asingnar como valor de sArray la reversión de sArray
  asignar como valor de sInversa la cadena que se optiene como resultado de unir los elementos de sArray
 retornar la comparación de igualdad sMinuscula === sInversa
*/

// CÓDIGO

function palindrome(s) {
  let sMinuscula = s.toLowerCase();
  let sInversa;
  let sArray;

  sMinuscula = sMinuscula.replace(/([^A-Za-z0-9])/g, "");
  sArray = sMinuscula.split("");
  sArray = sArray.reverse();
  sInversa = sArray.join("");

  return sMinuscula === sInversa;


};

console.log(palindrome("Atar a la rata")); // true
console.log(palindrome("vamos makers!")); // false

/*
REFACTORIZACIÓN

Implementa una solución con un código más limpio.
*/
