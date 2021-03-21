const number1 = 25;
const number2 = 15;

let lastCommonDivisor = 0;
for (let divisor = 1; divisor <= number1; divisor++) {
    if (number1 % divisor !== 0) {
        continue;
    }

    if (number2 % divisor === 0) {
        lastCommonDivisor = divisor;
    }
}

console.log(`Last common divisor is: ${lastCommonDivisor}`);