//arreglos: es un objeto que es capaz de guardar un conjunto de valores.

//para declarar un arreglo debo usar corchetes.
//en este caso "frutas" es una referencia a un conjunto de valores.
//esta parte de arriba es un arreglo vacío. pero es una inicialización para un arreglo.
//let frutas = [];

//function comprarFrutas(){
    //de esta manera asigno en la posición "0" la palabra 'manzana'
//    frutas[0] = 'manzana';
//}


//********************************************* 

let frutas = [];
let indice = 0

function comprarFrutas(nombreFruta){
    frutas[indice] = nombreFruta;
    indice++;
}

comprarFrutas('manzana');
comprarFrutas('fresa');
comprarFrutas('platano');
comprarFrutas('cereza');

console.log(frutas);


//de esta manera puedo crear arreglos con una longitud definida
const verduras = newArray (2);