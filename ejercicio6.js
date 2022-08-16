let array = ['uno', 'dos', 'tres', 'cuatro'];
let value = 'tres';

function stringExist(array, value) {
    let count=0;
    for (i=0; i <= array.length; i++) {
        if(value==array[i]){
            count++;
        }
    }
    if (count>0){
        return true;
    } else {
        return false;
    }
}

let count= stringExist(array, value);
console.log(count)