const products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Tablet', inStock: true },
    { id: 4, name: 'Headphones', inStock: false },
  ];
  
  // Expected output: [{ id: 1, name: 'Laptop', inStock: true }, { id: 3, name: 'Tablet', inStock: true }]

  const result = products.filter(item => item.inStock);
  console.log(result);