const ciudad1 = "bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDisponibles);

//Definicion de una lista con tipo de dato avreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina"];
console.log(paisesDisponibles);
{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);
}