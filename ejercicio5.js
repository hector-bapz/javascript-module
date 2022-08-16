let array = [10, 2, 2, 10, 2, 2, 5, 10];
let value = 2;

function countingArray(array, value) {
    let count=0;
    for (i=0; i <= array.length-1; i++) {
        if(value==array[i]){
            count++;
        }
    }
    return count;
}

let count= countingArray(array, value);
console.log(count)