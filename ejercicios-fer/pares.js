// [12,45,67,24, 12] -> [12, 24, 12] pares

const numbers = [12, 45, 67, 24, 12];

const pairs = x => x % 2 === 0;

function filter (array, callback) {
    let newArray = [];
    for (i=0; i<array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let pairArray = filter(numbers, pairs);
console.log(pairArray);