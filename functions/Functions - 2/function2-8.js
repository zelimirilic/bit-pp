function prostBroj(num) {
    if (num === 1) {
        return 'Nije prost';
    } else if (num === 2) {
        return 'Prost je';
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'nije prost';
            }
        }

        return 'Prost je !!!';
    }
}

console.log(prostBroj(37));
