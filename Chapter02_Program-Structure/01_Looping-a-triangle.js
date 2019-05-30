/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

//With for
for(let s = "#"; s.length < 8; s += "#") {
    console.log(s);
}

console.log("\n");

//with while
let sr = "#";
while(sr.length < 8) {
    console.log(sr);
    sr += "#";
}