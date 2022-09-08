let arregloSucio = [0, 1, false, 2, undefined, '', 3, null];

function cleanFalsyValues(array) {
    for (let i=array.length; i>=0; i--){
        if(!array[i]){
            array.splice(i,1)
        }   
    }
}

cleanFalsyValues(arregloSucio)

console.log(arregloSucio)
