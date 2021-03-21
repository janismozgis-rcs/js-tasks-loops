const numberToCheck = 7;

let hadDivisor = false;

for (let i = 2; i < numberToCheck; i++) {
    if (numberToCheck % i === 0) {
        hadDivisor = true;
        break;
    }
}

if (hadDivisor) {
    console.log(`${numberToCheck} is not a prime`);
} else {
    console.log(`${numberToCheck} is a prime`);
}