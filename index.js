

const fs = require('fs');


const getDataA = () => {
    return fs.readFileSync('./a.txt', 'utf-8');
}

const getDataB = () => {
    return fs.readFileSync('./b.txt', 'utf-8');
}

const add = (dataA, dataB) => {
    try {
        let a = Number(dataA)
        let b = Number(dataB);

        if (isNaN(a) || isNaN(a)) {
            console.log('Type error: it\'s not number')
        }

        console.log(a + b);

    } catch (err){
        console.log(err);
    }
}

add(getDataA(), getDataB());
