// ['Cin', 'Jonatan', 'Fanny', 'Manu'] -> ['Jonatan', 'Fanny', 'Manu'] Los que tienes A

const names = ['Cin', 'Jonatan', 'Fanny', 'Manu'];

const letterA = (name) => {
    let nameArray = []
    nameArray = name.split("");
    for(let item of nameArray){
        if (item ==='a'){
            return true;
        }
    }
};

function filter (array, callback) {
    let newArray = [];

    for (i=0; i<array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let namesArray = filter(names, letterA);
console.log(namesArray);