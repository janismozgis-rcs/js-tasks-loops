
for (let i = 1; i <= 500; i++) {
    let divisorSum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            divisorSum += j;
        }
    }

    if (divisorSum === i) {
        console.log(i);
    }
}