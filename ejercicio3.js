let array = [10, 5, 2, 50, 4, 1, 46, 80];
let value = 70;

function greatestValue(array, value) {
    let count=0;
    for (i=0; i <= array.length; i++) {
        if(value<array[i]){
            count++;
        }
    }
    return count;
}

let count= greatestValue(array, value);
console.log(count)