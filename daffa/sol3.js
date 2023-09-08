/*
Given an array of numbers, use the `reduce` method to calculate the total sum of all even numbers in the array.
*/
const numbers = [2, 4, 7, 8, 10, 15];

const calculate = numbers.reduce(function (result, item) {
    if(item % 2 == 0) {
        result += item
    }
    return result
}, 0);

console.log(calculate)
