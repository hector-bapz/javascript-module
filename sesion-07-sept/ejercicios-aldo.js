//11.- generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 

// let kodersG21 = ['Ivette de León', 'Benjamín Alvarado', 'Christian Klumb', 'Cinthia Ruiz', 'Mariana Deni Ramírez', 'Emmanuel Salas', 'Estefany Leyva', 'Fernando Toledo', 'Héctor Barboza', 'Javier Campos', 'Jonatan Arevalo', 'Manuel Cabrera', 'Rafael Villaseñor', 'Rodrigo Montoya', 'Victor Cosme', 'Xavy Escamilla'];

// let koders = (lista) => {
//     for(student of lista){
//         console.log(student)
//     }
// }

// koders(kodersG21)

//12.- generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'
// let koder = (lista, student) => {
//     let found = ''
//     for(el of lista){
//         if (el == student){
//             found = el
//         }
//     }

//     if (found != ''){
//         console.log(found)
//     } else {
//         console.log('Ese alumno no pertenece a esta generación')
//     }
// }

// koder(kodersG21, 'Ivette de León')

//another test
let kodersG21 = ['Ivette de León', 'Benjamín Alvarado', 'Christian Klumb', 'Cinthia Ruiz', 'Mariana Deni Ramírez', 'Emmanuel Salas', 'Estefany Leyva', 'Fernando Toledo', 'Héctor Barboza', 'Javier Campos', 'Jonatan Arevalo', 'Manuel Cabrera', 'Rafael Villaseñor', 'Rodrigo Montoya', 'Victor Cosme', 'Xavy Escamilla'];
let koderTwo = (lista, student) => {
    for(let el of lista){
        if (el === student){
            return el
        } else if (el=== undefined){
            return 'not found'
        }
    }
}

let blabla = koderTwo(kodersG21, 'Benjamín Alvarado')
console.log(blabla)