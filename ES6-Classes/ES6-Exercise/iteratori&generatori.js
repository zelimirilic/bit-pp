let colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
function createIteratorStart(items) {
    var i = 0;
    return {
        next: function () {
            var done = (i >= items.length);
            var value = (!done ? items[i++] : undefined);
            return {
                done: done,
                value: value
            };
        }
    }
}

var iterator = createIteratorStart([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

var obj = {
    *createIterator(items) {
        for (var i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
}
var iterator = obj.createIterator([15, 18, 221]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
