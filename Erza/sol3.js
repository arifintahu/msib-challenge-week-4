const numbers = [2, 4, 7, 8, 10, 15];

// Expected Output: 24

const result = numbers.reduce((acc, item)=>{
    if (item % 2 === 0) {
        acc += item;
    }
    return acc;
},0);

console.log(result);