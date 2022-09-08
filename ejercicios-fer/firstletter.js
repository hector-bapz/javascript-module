// ['Cin', 'Jonatan', 'Fanny', 'Manu'] -> ['Cin'] Los que inician con 'c'

const names = ['Cin', 'Jonatan', 'Fanny', 'Manu'];

const firstLetter = name => name[0] === 'C';

function filter (array, callback) {
    let newArray = [];

    for (i=0; i<array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let namesArray = filter(names, firstLetter);
console.log(namesArray);