const numbers = [12, 45, 67, 24, 12]

function find(array, callback, value) {
    for (item of array){
        let findIt = callback(array, value)
        if (findIt) return item
    }
}

function lookingFor(array, value){
    for (item of array){
        if(value===array)
        return true
    }
}

console.log(find(numbers, lookingFor, 12))

