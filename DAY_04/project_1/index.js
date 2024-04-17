function counter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    return increment;
}

// Usage
const counterFunc = counter();
console.log(counterFunc()); 
console.log(counterFunc()); 
console.log(counterFunc()); 

