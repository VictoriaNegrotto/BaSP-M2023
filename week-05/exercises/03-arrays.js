console.log('--EXERCISE 3: ARRAYS');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).//

console.log('exercise 3,a:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(mes[4], mes[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).//

console.log('exercise 3, b:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mes.sort();
console.log(mes);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('exercise 3, c:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mes.push("verano");
mes.unshift("capricornio");
console.log(mes);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).//

console.log('exercise 3, d:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mes.shift ("Enero");
mes.pop("Diciembre");
console.log(mes);

// e. Invertir el orden del array (utilizar reverse).//

console.log('exercise 3, e:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mes.reverse();
console.log(mes);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).//

console.log('exercise 3, f:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(mes.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).//

console.log('exercise  3, g:');
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(mes.slice(4,11));
