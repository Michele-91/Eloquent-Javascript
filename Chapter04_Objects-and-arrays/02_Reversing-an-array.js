/*
// Arrays have a reverse method that changes the array by inverting the 
// order in which its elements appear. For this exercise, write two functions, 
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array 
// as argument and produces a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: 
// it modifies the array given as argument by reversing its elements. 
// Neither may use the standard reverse method.
*/

function reverseArray(array) {
    let newArray = [];
    for(let i = array.length -1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for(let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        if(temp === array[j] && array[j] === array[i]) break;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


//BOOK SOLUTION

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}