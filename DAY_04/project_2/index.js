function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}


const number = [1, 2, 3, 4, 5];


const doubled = customMap(number, (num) => num * 2);
console.log(doubled); 


const stringNumbers = customMap(number, (num) => num.toString());
console.log(stringNumbers); 


//reduce

function customReduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}


const numbers = [1, 2, 3, 4, 5];


const sum = customReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


const concatenatedString = customReduce(numbers, (accumulator, currentValue) => accumulator + currentValue.toString(), "");
console.log(concatenatedString); 