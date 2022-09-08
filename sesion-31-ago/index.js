import saludame from './modulo.js'

saludame();

//callback
function saludar2(callback){
    console.log('este soy yo')
    callback()
}

saludar2(saludame);

//ejecutar
saludame();

//retornarla dentro de otra función
function saludar3(callback){
    return console.log("oli" + callback())
}

saludar3(saludame);

//asignarla como valor de una variable
let variableSaludar = saludame
variableSaludar()