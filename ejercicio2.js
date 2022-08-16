let array = [10, 5, 2, 50, 4, 1, 46, 80];

function greatestValue(array) {
    let greatest=array[0]
    for (i=0; i <= array.length; i++) {
        if(greatest<array[i]){
            greatest = array[i];
        }
    }
    return greatest;
}

let biggest= greatestValue(array);
console.log(biggest);