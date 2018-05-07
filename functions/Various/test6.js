let sum = 0;
for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        sum++;
    }
    if (i == 8) {
        break;
    }
}

console.log(sum);