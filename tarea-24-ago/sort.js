/*
Retornar un objeto con los nombres de los usuarios ordenados por edad, de mayor a menor
const users = [{name: 'aldo', age: 18}, {name: 'magaly', age: 30},{name: 'alfonso', age: 20}, {name: 'jesus', age: 50}, {name: 'alberto', age: 10}];
const result = {
    0: 'aldo',
    1: 'magaly',
    2: 'alfonso',
    3: 'jesus',
    4: 'alberto'
};
*/

const users = [
    {name: 'aldo', age: 70}, 
    {name: 'magaly', age: 30},
    {name: 'alfonso', age: 20}, 
    {name: 'jesus', age: 50}, 
    {name: 'alberto', age: 10}];

function sortByAge (usersArray) {
    let done = false;

    while (!done) {
    done = true;

    for (let i=1; i<usersArray.length; i++) {
        if (usersArray[i-1].age < usersArray[i].age){
            done = false;
            let previousValue = usersArray[i-1];
            usersArray[i-1] = usersArray[i]
            usersArray[i] = previousValue
            }
        }
    }
    return usersArray
}

console.log(sortByAge(users));

