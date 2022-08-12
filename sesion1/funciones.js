//declarativa. d

function miFuncion(){
    return 3;
}


//expresión. aquí la función no tiene un nombre. lo que salga de la función se guarda en la variable.
let miOtraFuncion = function(a, b){
    return a + b;
}

//en una función, lo que está dentro del parentesis se le llama "parametros" (cuando se está declarando)
function multiplicar(numero1, numero2){
    let resultado = numero1 * numero2
    //`` <--- estos son "backticks" y logra hacer lo que se le llama "template string"
    //el template string es una linea de texto que es capaz de usar variables dentro de su string usando 
    //la sintaxis ${ NOMBRE DE LA VARIABLE }
    console.log(`el resultado de la multiplicacion es: ${resultado}`)
    
    //retorna el valor para almacenarlo después en una variable. se nos recomienda ampliamente NO USAR VARIABLES GLOBALES
    //le dice a javascript que ahí acaba.
    return resultado

}

//arrow function. funciones flecha. una forma compacta de definir funciones. no tiene la palabra reservada "function".
let arrowFunction = () =>{

}

//diferencia entre método y una función. el método le pertenece a un objeto
//el método es una propiedad de un objeto.