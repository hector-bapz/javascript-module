let firstArray = [1, 2, 3, 4, 5]
let secondArray = ['uno', 'dos', 'tres']
let thirdArray = ['jkfdsjkfds', 4847489, 'kdfla']

function combiningArrays(arrayOne, arrayTwo, arrayThree){
    let newArray = [];
    newArray = [...arrayOne] + [...arrayTwo] + [...arrayThree];
    return newArray;
}

let combinedArray = combiningArrays(firstArray, secondArray, thirdArray)
console.log(combinedArray);