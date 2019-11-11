function fizzbuzz(number) {
  if (number % 15 === 0) {
    return 'fizzbuzz'
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return number.toString();
  }
}

var numberlist = new Array(100);
for(var i = 0; i < numberlist.length; i++ ){
  document.write(fizzbuzz(i+1) + "<br/>");
}
