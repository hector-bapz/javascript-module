let array = [10, 2, 2, 10, 2, 2, 5, 10];
let value = true;

function countingArray(array, value) {
    let count=0;

    if(typeof value !== "number") {
     console.log("porfavor escriba un numero");
     return;
    }

    for (i=0; i <= array.length-1; i++) {
        if(value===array[i]) {
            count++;
        }
    }
    return count;
    
}

let count= countingArray(array, value);
console.log(count)