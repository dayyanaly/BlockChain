let fs = require('fs');

console.log('1');

fs.readFile('./Task.txt', 'utf8', function (error, data) {

    if (error) {
        throw error;
    }

    console.log(`${data} : 2`);
});

console.log('3');