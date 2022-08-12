// EJERCICIO1

let numero1;
let numero2;

function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

let resultadoSuma = sumar(1, 4);
console.log(resultadoSuma);

//EJERCICIO2

function saludo(nombre = "amigo") {
  return `Hola ${nombre}`;
}

console.log(saludo("deni"));
console.log(saludo("cintia"));
console.log(saludo("benja"));
console.log(saludo(""));
console.log(saludo());
