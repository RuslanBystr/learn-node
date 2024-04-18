

const fs = require('fs');

let a = fs.readFileSync('./a.txt')

let b = fs.readFileSync('./b.txt');

console.log(Number(a));
console.log(Number(b));

for (let i = 0; i < Number(a); i++) {
    console.log(i);
}
