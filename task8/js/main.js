const endNumber = 50;
let lastPrime = 0;

for (let numberToCheck = 0; numberToCheck <= endNumber; numberToCheck++) {
    let hadDivisor = false;

    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    if (!hadDivisor) {
        lastPrime = numberToCheck;
    }
}

console.log(`Last prime number before ${endNumber} was ${lastPrime}`);