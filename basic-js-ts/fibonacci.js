function fib(num) {
    if(num===0) return 0
    if(num<=1) return 1
    return fib(num-1) + fib(num-2)
}

console.log('fib(1)==>', fib(1))
console.log('fib(3)==>', fib(3))
console.log('fib(12)==>', fib(12))