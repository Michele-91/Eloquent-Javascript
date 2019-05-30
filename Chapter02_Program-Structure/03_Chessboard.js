/*
Write a program that creates a string that represents 
an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.
*/

let output = "";
let size = 10;
for(let i = 1; i <= size; i++) {
    for(let j = i; j < i+size; j++) {
        if (j % 2 == 0) {
            output += "#";
        } else {
            output += " ";
        }
    }
    console.log(output);
    output = "";
}

//book solution
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);