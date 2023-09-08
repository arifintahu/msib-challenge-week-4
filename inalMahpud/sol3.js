const numbers = [2, 4, 7, 8, 10, 15];
const hasilReduce = numbers.reduce(function (item, result) {
  if (result % 2 === 0) {
    return (item += result);
  }
  return item;
}, 0);

console.log(hasilReduce);
