// ## Case 1 - Using `map` to Transform and Extract Data
// Given an array of objects representing people's information, use the `map` method to create a new array containing only the names of people.
// ```javascript
const people = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];
// // Expected Output: ['Alice', 'Bob', 'Charlie']

const person = people.map(people => people.name);

console.log(person);