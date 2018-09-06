arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 1, 1, 1, 11, 1, 1, 1, 1, 5, 5, 5,4]

let set = new Set(arr);

let procesor = {
    output(value) {
        console.log(value);
    },
    proces(dataSet) {
        dataSet.forEach(value => this.output(value));
    }
}
procesor.proces(set);

let myArr = [...set];
console.log(myArr);

