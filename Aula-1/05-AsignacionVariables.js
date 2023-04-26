//palabra const
//espacio de memoria que luego de asignada no cambia de valor en el tiempo
const valorPasajeros = 1650;

console.log(valorPasajeros);

const nombrePasajero = "Leonardo";
const apelliPasajero = "Lacruz";

console.log(nombrePasajero);
console.log(apelliPasajero);

//Palabre let
//Espacio de memoria que puede cambiar durante la ejecucion del programa
//let nombreCompletoPasajero = nombrePasajero + " " + apelliPasajero;
//console.log(nombreCompletoPasajero);

//Palabra var
//espacio de memoria que puede cambiar durante la ejecucion del programa
//El alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + apelliPasajero; 

//Bloque
{
    let nombreCompletoPasajero = nombrePasajero + " " + apelliPasajero;
    console.log("Variable con let: "+nombreCompletoPasajero);
    console.log("Variable con var: "+nombreCompletoDelPasajero);
}
console.log("Variable con var: "+ nombreCompletoDelPasajero);
console.log("Variable con let: "+ nombreCompletoPasajero);
