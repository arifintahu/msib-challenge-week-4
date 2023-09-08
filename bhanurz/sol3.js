const numbers = [2, 4, 7, 8, 10, 15];

const sumEvenNumbers = numbers.reduce((acc, currValue) => {
    if (currValue % 2 == 0) {
        return acc + currValue;
    }
    return acc;
}, 0)
console.log(sumEvenNumbers);