//using callbacks
const fs = require('fs').promises;


function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        const numbers = data.trim().split('\n').map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        callback(null, sum);
    });
}


function aggregateDataAsync(fileList, callback) {
    let totalSum = 0;
    let filesRead = 0;

    function readFileCallback(err, sum) {
        if (err) {
            callback(err);
            return;
        }
        totalSum += sum;
        filesRead++;
        if (filesRead === fileList.length) {
            callback(null, totalSum);
        }
    }

    fileList.forEach((filename) => {
        readFile(filename, readFileCallback);
    });
}


const fileList = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataAsync(fileList, (err, totalSum) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Total sum:', totalSum);
});


//Using Promises and async/await:






async function readFile(filename) {
    const data = await fs.readFile(filename, 'utf8');
    const numbers = data.trim().split('\n').map(Number);
    return numbers.reduce((acc, num) => acc + num, 0);
}

async function aggregateDataAsync(fileList) {
    let totalSum = 0;
    for (const filename of fileList) {
        const sum = await readFile(filename);
        totalSum += sum;
    }
    return totalSum;
}

const fileLists = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataAsync(fileLists)
    .then((totalSum) => {
        console.log('Total sum:', totalSum);
    })
    .catch((err) => {
        console.error('Error:', err);
    });