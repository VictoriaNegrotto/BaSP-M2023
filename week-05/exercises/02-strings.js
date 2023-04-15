console.log('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).//

console.log('exercise 2, a:');
var abc = 'abecedario';
abc = abc.toUpperCase();
console.log(abc);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).//

console.log('exercise 2, b:');
var mercado = 'supermercado';
console.log(mercado.substring(0,5));


// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).//

console.log('exercise 2, c:');
var mercado = 'supermercado';
console.log(mercado.substring(mercado.length - 3, mercado.length));


// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).//

console.log('exercise 2, d:');
var mercado = 'supermercado'
var almacen = mercado.substring(0,1).toUpperCase() + mercado.substring(1,12).toLowerCase();
console.log(almacen);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).//

console.log ('exercise 2, e:');
var casa = 'casa hermosa';
var hermosa = casa.indexOf(" ");
console.log(hermosa);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).//

console.log ('exercise 2, f:');
var mercado = 'supermercado baratisimo'
var baratisimo = mercado.substring(0,1).toUpperCase() + mercado.substring(1,mercado.indexOf(" ")).toLowerCase() 
+ mercado.substring(mercado.indexOf(" "), mercado.indexOf (" ") + 2).toUpperCase()
+ mercado.substring (mercado.indexOf(" ") + 2, mercado.length).toLowerCase();
console.log(baratisimo);
