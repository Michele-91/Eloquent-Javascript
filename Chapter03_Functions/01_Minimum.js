
// Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    if(a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return 'They are the same';
    }
}

console.log(`The minimum is: ${min(0, 10)}`);
console.log(`The minimum is: ${min(0, -10)}`);
console.log(`The minimum is: ${min(-5, -2)}`);


