console.log('--EXERCISE 06: FUNCTIONS');

console.log('exercise 6, a:');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
//y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function numero() {
   return (a + b);
}
var numero = (5,10);
console.log(numero);

console.log('exercise 6, b:');

// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros
// no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
//retornar el valor NaN como resultado.


function letra(a, b) {
   if (typeof(a) == 'number' && typeof(b) == 'number') {
      return (a + b);
   }
  else {
   alert('error de parametro');
  return (NaN);
   }
}
  console.log(letra(5 ," "));
   

console.log('exercise 6, c:');

// c. Crear una función “validateInteger” que reciba un número como parámetro y 
//devuelva verdadero si es un número entero.


function validateInteger (a) {
  if (Number.isInteger (a)) {
    return true;
  } 
  else { 
   return false
   }
}
console.log(validateInteger (5));
console.log(validateInteger (1.5));

console.log('exercise 6, d:');

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada 
//a la función del ejercicio 6c. y que valide que los números sean enteros.
// En caso que haya decimales mostrar un alert con el error y retornar el número 
//convertido a entero (redondeado).


function valor (a, b) { 
      if (!validateInteger (a)) {
         alert('error');
        a = Math.round(a);
      } 
      if (!validateInteger (b)) {
         alert('error');
        b = Math.round(b);
      } 
      if (typeof(a) == 'number' && typeof(b) == 'number') {
         return (a + b);
      }
     else {
      alert('error de parametro');
     return (NaN);
      }
} 
console.log (valor (2.7 , 'b'));
console.log (valor (8, 2));


console.log ('exercise 6, e:');

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
// probando que todo siga funcionando igual que en el apartado anterior.

function valor1(a) {
   if (!validateInteger (a)) {
      alert('error');
     a = Math.round(a);
     return a;
   } 
   else {
      return a;
   }
}
function valor2(a,b) {
   if (typeof(a) == 'number' && typeof(b) == 'number') {
      a = valor1(a);
      b = valor1(b);
      return (a + b);
   }
  else {
   alert('error de parametro');
  return (NaN);
   }
}

console.log(valor2(2.3, 5.8));
console.log(valor2(2.2, 8));

