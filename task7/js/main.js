const number = 5;
let factorialSum = 1;
for (let i = 1; i <= number; i++) {
    factorialSum *= i;
}

console.log(`Input number: ${number}`);
console.log(`Factorial: ${factorialSum}`);