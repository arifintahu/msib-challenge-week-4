const products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Tablet', inStock: true },
    { id: 4, name: 'Headphones', inStock: false },
  ];
  const result = products.filter(prod => prod.inStock == true);
  return console.log(result);
  // Expected output: [{ id: 1, name: 'Laptop', inStock: true }, { id: 3, name: 'Tablet', inStock: true }]