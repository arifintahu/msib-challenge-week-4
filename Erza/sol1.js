const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
  
  // Expected Output: ['Alice', 'Bob', 'Charlie']

  const result = people.map(item => item.name);
  console.log(result);