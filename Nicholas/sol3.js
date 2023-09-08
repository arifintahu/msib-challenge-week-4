const numbers = [2, 4, 7, 8, 10, 15];
const sum = numbers.reduce(function (result, item) {
    if (item % 2 === 0) {
        return result + item;
    }
    return result; 
}, 0); 

console.log(sum); 
