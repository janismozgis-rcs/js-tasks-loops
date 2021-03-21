const startNumber = 2;
const endNumber = 100;
let primeNumbers = '';
let primeNumberCount = 0;

for (let numberToCheck = startNumber; numberToCheck <= endNumber; numberToCheck++) {
    let hadDivisor = false;

    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    if (!hadDivisor) {
        primeNumbers += `${numberToCheck} `;
        primeNumberCount++;
    }
}

console.log(`Prime nubmers: ${primeNumbers}`);
console.log(`Total prime numbers found: ${primeNumberCount}`);