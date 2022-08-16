let array = [10, 2, 2, 10, 2, 2, 5, 10, 9];

function halfArray(array) {
    let half= Math.floor(array.length/2);
    let newArray = [];
    for (i=half, j=0; i <= array.length-1; i++, j++) {
        newArray[j] = array[i]
    }
    return newArray;
}

let half= halfArray(array);
console.log(half)