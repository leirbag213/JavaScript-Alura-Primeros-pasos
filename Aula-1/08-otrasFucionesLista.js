//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");

//Definicion de una lista con tipo de dato avreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

// Resolver el prime elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length}`);

// Resolver el último elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length}`);

// Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e)=> e == 'Brasil');
console.log(paisesFiltrados);

// Unificar la lista de caracteres
console.log(paisesDisponibles.join('-'));

// Ordeanr lista
console.log(paisesDisponibles.sort())

// Conociendo la posicion
console.log(`Peru esta en la posición: ${paisesDisponibles.indexOf('Peru')}`);

// Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log('Lista de paises y ciudades');
console.log(listaPaisesYCiudades);
console.log('Lista de paises:');
console.log(paisesDisponibles);