function fizzbuzz(number) {
  if (number % 3 === 0) {
    return 'fizz';
  } else if (number === 5) {
    return 'buzz';
  } else {
    return number.toString();
  }
}
