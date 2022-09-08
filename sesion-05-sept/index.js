// con const se debe declarar e inicializar al mismo tiempo
const PI = 3.1416;
//recursion= funcion que se manda a llamar a si misma y cambia los parametros 

// delcaracion de una variable
let nombre;
// inicializacion de una variable
nombre = 'Estefanny'
let numero = 19;
let esMujer = true;
let usuario; //let usuario = undefined;
let auto = null;
let tipoDeDato = typeof nombre; //esto es una expresión
console.log(tipoDeDato);
console.log(usuario); //undefined
// la diferencia de undefined y null: null tiene un valor nulo undefined no tiene un valor

// objeto; coleccion de llaves y datos(valores)
let fruta = {
    color: 'rojo', //llave(color) datos o valores(rojo)
    sabor: 'acido',
    precio: 97,
    hermana: {
        color: 'amarilla',
        sabor: 'dulce',
        precio: 110,
        hermana: {
            color: 'azul',
            sabor: 'agridulce',
            precio: 120,
            hermana: {
                color: 'verde',
                sabor: 'dulce',
                precio: 10,
                hermana: {
                    color: 'rosa',
                    sabor: 'dulce',
                    precio: 80
                },
            },
        },
    }
};

// para acceder a los valores de los objetos se hace por medio de las propiedades
console.log(fruta.hermana.hermana.hermana.hermana.precio); //manera estatica de obtener un valor

//para acceder a los valores del arrglo se hace mediante el indice
let mesesDeCosecha = ['enero', 'febrero']
meses[0]; // traeria 'enero'
meses[1]; // traeria 'febrero'

// = operacion de asignacion: asigna un valor

//operadores aritmeticos}
const suma = 10 + 10; // sumar valores numericos
console.log(suma);
const concatenar = 'fanny' + 'leyva';// concatenar valores
console.log(concatenar);
const sumar = 5 + '5'; //typecoertion: cambia un tipo de dato por otro 
// type coertion si js lo cambia solo es conversion implicita
// type coertion si lo hacemos nosotros es conversion explicita 
console.log(sumar)

const resta = 5 - 5; // restar numeros
const resta2 = 5 - '5'; // se restan aun asi type coertion
const resta3 = '5' - '5'; //se restan aun asi type coertion
console.log(resta2);
// en multiplicacion, divison y potencia funciona igual el type coertion


//operadores logicos &&, ||, >=, <=, ==, ===

//estructuras de control
let esHumano = true;
// si la condicion se cumple ejecuta lo que esta dentro del if
if(esHumano === true){
    console.log('Fanny es humana');
}// si no se cumple no entra en el if (no ejecuta el console.log)

let usuarioDos = 18;
if(usuarioDos >= 18 && usuarioDos < 30) {
    console.log('Es mayor de edad')
}else if(usuarioDos >= 30) {
    console.log('Es menor de edad')
}else{
    console.log('Es menor de edad')
}// si no se cumple ejecuta esto| caso contrario
// para usar else siempre debe haber un if

let string = 'hola';
switch (string) {
    case 'adios':
        console.log('Es la despedida')
        break;
    case 'hola':
    console.log('Hola mundo')
        break;
    default:
        console.log('Cualquier otro caso')
        break;
}
// estructura de control : controlar que codigo se va a ejecutar