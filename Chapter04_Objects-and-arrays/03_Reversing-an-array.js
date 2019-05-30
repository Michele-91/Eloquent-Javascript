
/*
// Write a function arrayToList that builds up a list structure like the one shown 
// when given [1, 2, 3] as argument. Also write a listToArray function that produces 
// an array from a list. Then add a helper function prepend, which takes an element 
// and a list and creates a new list that adds the element to the front of the input 
// list, and nth, which takes a list and a number and returns the element at the given 
// position in the list (with zero referring to the first element) or undefined when 
// there is no such element.
// If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array) {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    console.log(list);
    return list;
}

console.log(arrayToList([10, 20]));

function listToArray(list) {
    let array = [];
    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(element, list) {
    return {value: element, rest: list};
}

console.log(prepend(10, prepend(20, null)));

function nth(list, number) {
    if(!list) {
        return undefined;
    } else if (number == 0) {
        return list.value;
    } else {
        return nth(list.rest, number - 1);
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));