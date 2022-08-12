let numero = 6;

function par(num){
    let validacion = num % 2;
    if(validacion == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(par(numero));