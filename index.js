

const fs = require('fs');

try {
    let aData = fs.readFileSync('./a.txt', 'utf-8');
    let bData = fs.readFileSync('./b.txt', 'utf-8');

    let a = Number(aData);
    let b = Number(bData);

    if (isNaN(a) || isNaN(b)) {
        console.log('Type error: is not number')
    }

    console.log(a + b);

} catch (err){
    console.log(err);
}
