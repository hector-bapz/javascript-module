function map (array, callback){
    let newArray = [];
    for(i=0; i<array.length; i++) {
        console.log(i)
        const newElement = callback(array[i])
        newArray.push(newElement)
    }
    return newArray;
}
const namesArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] ;

const firstLetter = (string) => {
    let word = string.split(" ");
    let newWordArray = []

    for(i=0; i<word.length; i++){
        console.log(i)
        const test = word[i]
        newWordArray.push(test[0])
    }

    return newWordArray
}

const initials= map(namesArray, firstLetter);

console.log(initials);