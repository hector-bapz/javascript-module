//8.- generar una función que me retorne un string que diga 'hola koders y después imprimir ese valor en la consola con ayuda de console.log() 

let hola = () => {
    console.log('hola koders')
}
hola()

//9.- generar una función que me retorne el resultado de una operación matemática, el nombre de la operación y los valores con los que se ejecutara la operación serán los parámetros de dicha funcion, por ejemplo:
let operacionMatematica = (operacion, num1, num2) =>{
    if(operacion === 'suma'){
        return num1 + num2
    } else if(operacion === 'resta'){
        return num1 - num2
    } else if(operacion === 'multiplicación'){
        return num1 * num2
    }
}

let resultadoSuma = operacionMatematica('suma', 10,10);
let resultadoResta = operacionMatematica('resta', 10,10);
let resultadoMultiplicacion = operacionMatematica('multiplicación', 10,10);

console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoMultiplicacion)


//10.- generar una función que me retorne un objeto literal con las siguientes propiedades(nombre, edad, genero, dirección), la propiedad nombre debe ser un objeto que tenga las siguientes propiedades(nombre, apellidoPaterno y apellidoMaterno)

let generarObjetoLiteral = () => {
    return {
        nombre: {
            nombre: 'Aldo',
            apellidoPaterno: 'Aldaco',
            apellidoMaterno: 'Contreras'
        },
        edad: 30,
        genero: 'Masculino',
        direccion: 'Mar del norte'
    }
}

let resultado = generarObjetoLiteral();
console.log(resultado)

//11.- generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 

let kodersG21 = ['Ivette de León', 'Benjamín Alvarado', 'Christian Klumb', 'Cinthia Ruiz', 'Mariana Deni Ramírez', 'Emmanuel Salas', 'Estefany Leyva', 'Fernando Toledo', 'Héctor Barboza', 'Javier Campos', 'Jonatan Arevalo', 'Manuel Cabrera', 'Rafael Villaseñor', 'Rodrigo Montoya', 'Victor Cosme', 'Xavy Escamilla'];

let koders = (lista) => {
    for(student of lista){
        console.log(student)
    }
}

koders(kodersG21)

//12.- generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'

let koder = (lista, student) => {
    for(let el of lista){
        if (el === student){
            return el
        } else if (el=== undefined){
            return 'not found'
        }
    }
}

let found = koder(kodersG21, 'Cinthia Ruiz')
console.log(found)

//13.- generar una función que genere un arreglo a partir de una cadena de texto por ejemplo:

let generarArreglo = (string) => {
    let newArray = []
    for(letter in string){
        newArray.push(string[letter])
    }
    return newArray;
}

let arreglo = generarArreglo('hola'); 
console.log(arreglo) // ['h', 'o', 'l', 'a']

//14.- generar una función que sume todos los números que están dentro de una lista de números, por ejemplo

let sumarElementos = (array) => {
    console.log(array)
    let sumaArreglo = array.reduce((acc, number) => {
          acc += number
          console.log(acc)
    },0)
    return sumaArreglo
}

let suma = sumarElementos([1,2,3,4,5]); 
console.log(suma) // 15


//15.- generar una función que quite todos los números que sean mayores al numero 10 de una lista de números, por ejemplo

let limpiarArreglo = (array) => {
    array
}

let nuevoArreglo = limpiarArreglo([11,12,3,4,15,5,8,10,20,1,2]); 
console.log(nuevoArreglo) // [3,4,5,8,10,1,2]
