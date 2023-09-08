// ## Case 3 - Using `reduce` to Calculate Aggregations
// Given an array of numbers, use the `reduce` method to calculate the total sum of all even numbers in the array.
const numbers = [2, 4, 7, 8, 10, 15];

const TotalEvenNumbers = numbers.reduce((tempValue, value) => {
  if (value % 2 === 0) {
    return tempValue + value;
  } else {
    return tempValue;
  }
}, 0);

console.log(TotalEvenNumbers);

// Expected Output: 24
