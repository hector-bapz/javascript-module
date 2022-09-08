// EJERCICIO UNO
let texto = 'hdiwbdnkks'
let numero = 63837387382
let booleano = true
let nulo = null
let indefinida;
let objeto = {
  valorUno: 'jdksndkjkssn',
  valorDos: 38373,
  valorTres: null,
  valorCuatro: 'kdkwjsk',
  valorCinco: 3627382
}
let arregloDatos = [7482, numero, 'ydksn', nulo, booleano, texto]


// EJERCICIO DOS
let auto = {
  puertas: 4,
  llantas: 4,
  color: 'negro',
  modelo: 'challenger',
  marca: 'ferrari'
}

// EJERCICIO TRES
let arregloNumeros = [12, 47, 357, 98, 26]

// EJERCICIO CUATRO
let mascotas = ['pelusa', 'kiara', 'nala']
function nombreMascotas(arregloMascotas){
  for(i=1;i<=10;i++){
    console.log('impresión número '+i);
    for(mascota of arregloMascotas){
      console.log(mascota);
    }
  }
}
nombreMascotas(mascotas)

// EJERCICIO CINCO
function MayoriaDeEdad(usuario){
  usuario.edad>=18 ? console.log(usuario.nombre) : console.log('No tengo permitido usar tus datos personales')   
}

let usuario = {
  nombre: 'Roberto Valgamidades',
  edad: 17
}

MayoriaDeEdad(usuario)

// EJERCICIO SEIS
let usuarioDos = {
  nombre: 'juan',
  edad: 20,
  contrasenia: 'password*2022'
}

function propiedadesObjeto (obj){
  for(let props in obj){
    console.log(obj[props])
  }
}

propiedadesObjeto(usuarioDos)

// EJERCICIO SIETE
function contenidoArreglo(arreglo){
  for(element of arreglo){
    console.log(element)
  }
}

contenidoArreglo(arregloDatos)