// ## Case 2 - Using `filter` to Select Specific Data
// Given an array of products, use the `filter` method to create a new array containing only products that are currently in stock.
const products = [
  { id: 1, name: 'Laptop', inStock: true },
  { id: 2, name: 'Phone', inStock: false },
  { id: 3, name: 'Tablet', inStock: true },
  { id: 4, name: 'Headphones', inStock: false },
];

// Expected output: [{ id: 1, name: 'Laptop', inStock: true }, { id: 3, name: 'Tablet', inStock: true }]

const inStockProducts = products.filter(product => product.inStock);

console.log(inStockProducts);