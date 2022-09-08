const libro = {
    titulo: 'Harry potter y el misterio de JS',
    autor: 'Victor',
    paginas: 300
}

for(let nombrePropiedad in libro){
    console.log(nombrePropiedad, libro[nombrePropiedad])
}

let frutas = ['fresa', 'mango', 'melon']
frutas[0]
frutas[1]
frutas[2]

for(let fruta of frutas){
    console.log(fruta)
}

for(let fruta in frutas){
    console.log(fruta)
}

let obj = {
    frutas: ['fresa', 'mango', 'melon'],
    personajes: ['harry', 'sina', 'benja']
}

for(let propiedad in obj){
    for(let elemento of obj[propiedad]){
        console.log(elemento)
    }
}

function imprimirNombre(nombre){
    console.log('Mi nombre es '+ nombre)
}

function hacerGelatina(sabor, forma){
    return `Esta es la gelatina de sabor ${sabor} y con forma ${forma}`
}

let gelatinaDeIsra = hacerGelatina('Jerez', 'gato')

let gelatinaDeVictor = hacerGelatina('fresa', 'redonda')

console.log(gelatinaDeVictor)

