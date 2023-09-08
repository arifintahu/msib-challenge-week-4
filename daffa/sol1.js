/*
Given an array of objects representing people's information, use the `map` method to create a new array containing only the names of people.
*/

const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

const name = people.map(item => item.name)

console.log(name)
