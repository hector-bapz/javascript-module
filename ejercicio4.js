let array = [10, 5, 2, 50, 4, 1, 46, 80];


function pair(array){
    let result;
    let pairArray = [];
    for (i=0; i <= array.length; i++) {
        result= array[i] % 2;
        if (result == 0){
            pairArray[i] =array[i] 
        }
    }
    return pairArray;
}

let newArray = pair(array);
console.log(newArray);