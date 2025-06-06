function fizzbuzz (n) {
  if (n !== 0) {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'FizzBuzz'
    } else if (n % 3 === 0) {
      return 'Fizz'
    } else if (n % 5 === 0) {
      return 'Buzz'
    }
    return n
  }
  return n
}

module.exports = fizzbuzz
