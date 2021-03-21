const number = '1234';
let sum = 0;
for (let digit of number) {
    const nummericDigit = digit * 1;
    sum += nummericDigit;
}

console.log(`Input a number: ${number}`);
console.log(`The sum of digits of ${number} is: ${sum}`);