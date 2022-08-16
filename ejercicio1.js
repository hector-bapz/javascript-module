//PRIMERA SOLUCION *****************************************

let array = [1, 2, 3, 4, 5];

function reversingArray(array) {
    let reverseArray = [];
    for (i= 0, j = array.length-1; j>=0; i++, j--){
        reverseArray[i] = array[j];
    };
    return reverseArray;
}
let NewArray = reversingArray(array);
console.log(NewArray);


//SEGUNDA SOLUCION *****************************************

let anotherArray = [1, 2, 3, 4, 5];

function reversingAnotherArray(array){
    let reverseArray = [...array].reverse();
    return reverseArray;
}
let anotherNewArray = reversingAnotherArray(anotherArray);
console.log(anotherNewArray);
