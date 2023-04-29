// Operadores de comparacion

const ciudadDestino = "Santiago";
const ciudadesDisponibles = ["Bogota","Lima","Santiago","Montevideo"];


// Palabra reservada if
// Evalua una condicion
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponibles para ventas');
}
else {
    console.log('Ciudad no disponible para viajar');
}

const valorPasje = 1000;

if (valorPasje === 1000) {
    console.log('El pasaje vale 1000');
}

//Operadores lògicos
//Y (AND) - 0 (OR) - NO (NOT)
//AND = && -Se deben cumplir las dos condiciones
// OR = || -Se deben cumplir una condicion
// NOT ! - No se cumple

const edadPasajero = 19;
const estaAcompañado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if (edadPasajero >= 18 || estaAcompañado){
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 ){
        console.log('Pasaje disponibles para ventas');
    }
    else {
        console.log('Ciudad no disponible para viajar');
    }
}

// Aplicando logica negativa
console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino)) > -1 (edadPasajero >= 18 || estaAcompañado) ){
    console.log('Pasaje disponibles para ventas');
}
else {
    console.log('Ciudad no disponible para viajar');
}

// Aplicando logica negativa
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (!(ciudadesDisponibles.indexOf(ciudadDestino) > -1 (edadPasajero >= 18 || estaAcompañado))){
    console.log('Ciudad no disponible para viajar or pasajero no cumple las reglas');
}
else {
    console.log('Ciuda deisponible para venta');
}





