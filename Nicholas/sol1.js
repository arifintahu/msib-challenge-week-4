const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
  people.map(getName);
  function getName(person) {
    return console.log(person.name);
  }
  // Expected Output: ['Alice', 'Bob', 'Charlie']