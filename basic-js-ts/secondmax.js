function secondMax(arr) {
    if(arr.length==1) return arr[0]
    if(!arr[0]) return 'Error!'
    if(Math.max.apply(null, arr)===Math.min.apply(null, arr)) return arr[0]
    arr.splice(arr.indexOf(Math.max.apply(null, arr)));
    return Math.max.apply(null, arr)
}

console.log('secondMax([2, 3, 4, 5])==>', secondMax([2, 3, 4, 5]))
console.log('secondMax([9, 2, 21, 21])==>', secondMax([9, 2, 21, 21]))
console.log('secondMax([4, 4, 4, 4])==>', secondMax([4, 4, 4, 4]))
console.log('secondMax([4123])==>', secondMax([4123]))
console.log('secondMax([])==>', secondMax([]))
