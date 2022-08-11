//COMO DECLARAR UNA VARIABLE
//convencion: especie de estándar en equipos. dicta como se tienen que hacer las cosas en tu equipo de desarrollo de software.
//el ";" representa el final de una línea de códigoy aunque no es necesario es buena practica.

//el "=" es un operador de asignación.

// declaracion de variables...
let nombreEnMinuscula;

// inicialización de variables...
nombreEnMinuscula = 'hector barboza perez';

// en los const se tiene que declarar e incializar en la misma linea de código. de lo contrario sale error.
// const no puede cambiar. tiene el mismo valor SIEMPRE
const PII = 3.1416

//nunca vamos a usar var!!

//el tipo booleano es solo para preguntar si algo es verdadero o falso
let booleano = true;

//es el valor por default que JS inicializa las variables.
let noEstaDefinida = undefined;

// es una variable de tipo objeto, es valor no definido. vacío.
let variable = null

//objetos: variables qe va a almacenar muchas variables o subvariables
// entre objetos se debe de separar con comas.
let carro ={
    motor: true,
    color: 'negro',
    llantas: 4,
    puetas: 3,
    pasajeros: {
        aldo: {
            edad: 30,
            nombre: 'alberto'
        },
        victor: {
            edad: 21
        }
    }
}

// para acceder a las propiedades de los objetos es:
// el nombre de la variable + . + la propiedad a la que quiero acceder. 
// por ejemplo:
carro.color //(saldra "negro")

// otra manera de acceder, sies que deseo una propiedad en especifico es:
// el nombre de la variable + [ + ' + nombre de la propiedad a la que quiero acceder + ' + ]
carro['color'] //(saldra "negro")

let arreglo = ['jdfksafdaf', 'durazno', 'uvas'];