describe("FizzBuzz", function() {

  it ('prints 1 when 1 is passed in', function() {
    expect(fizzbuzz(1)).toEqual('1');
  });

  it ('prints fizz instead of 3', function() {
    expect(fizzbuzz(3)).toEqual('fizz');
  });

  it ('prints buzz instead of 5', function() {
    expect(fizzbuzz(5)).toEqual('buzz');
  });

});
