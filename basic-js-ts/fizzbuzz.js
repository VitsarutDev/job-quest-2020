function fizzBuzz(num) {
    switch (true) {
        case num % 3 === 0 && num % 5 === 0:
            return 'FizzBuzz'
        case num % 3 === 0:
            return 'Fizz'
        case num % 5 === 0:
            return 'Buzz'
        default:
            break
    }
}

console.log('fizzBuzz(21)==>', fizzBuzz(21))
console.log('fizzBuzz(25)==>', fizzBuzz(25))
console.log('fizzBuzz(45)==>', fizzBuzz(45))

