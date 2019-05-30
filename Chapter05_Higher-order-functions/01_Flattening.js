
/*
// Use the reduce method in combination with the concat method to “flatten” 
// an array of arrays into a single array that has all the elements 
// of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((a, b) => a.concat(b));
console.log(arrays);
console.log(flattened);


//BOOK SOLUTION
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
