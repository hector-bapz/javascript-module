function sumarFunction(numero1, numero2){
    return numero1 + numero2
}

let sumaFuncion = sumarFunction(10, 10);
console.log(sumaFuncion)

let sumarArrowFunction = (numero1, numero2) => numero1 + numero2;
let sumaFuncionFlecha = sumarArrowFunction(10, 10);
console.log(sumaFuncionFlecha);

let concat = (string1, string2) => string1 + string2;
let texto = concat('hola ', 'soy tu bebito fiu fiu');
console.log(texto);

let sumarOtrosNumeros = (numero1, numero2) => {
    const PI = 3.1416;
    let resultado = numero1 + numero2 + PI
    return resultado
}

let resultado = sumarOtrosNumeros(25, 30)
console.log(resultado)

let carro = {
    puertas: 4,
    color: 'gris',
    marca: 'seat',
    llantas: 4
}

carro[duenio]='Aldo'

if(carro.duenio !== undefined){
    console.log('La propiedad si existe')
} else {
    console.log('La propiedad no existe')
}

console.log(carro['puertas']);

for(let caracteristica in carro){
    console.log(caracteristica)
}