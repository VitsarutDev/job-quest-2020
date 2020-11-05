function shift(arr, direction, n) {
    var times = n > arr.length ? n % arr.length : n;
    return arr.concat(arr.splice(0, (direction ==='right' ? arr.length - times : times)));
 }

console.log("shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)==>", shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))
console.log("shift([1, 2, 3, 4 ,5], 'right', 3)==>", shift([1, 2, 3, 4 ,5], 'right', 3))