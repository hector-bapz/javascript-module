let numero1 = 2
let numero2 = 2
let resultado = true

resultado = numero1>numero2;

if(numero1==numero2){
    console.log("ninguno de los 2 son mayores");
}else if(resultado)
    console.log(numero1, " es mayor que ", numero2);
else{
    console.log(numero2, " es mayor que ", numero1);
}