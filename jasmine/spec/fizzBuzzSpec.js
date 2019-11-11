describe("FizzBuzz", function() {

  it ('prints 1 when 1 is passed in', function() {
    expect(fizzbuzz(1)).toEqual('1');
  });

  it ('prints 2 when 2 is passed in', function() {
    expect(fizzbuzz(2)).toEqual('2');
  });

  it ('prints fizz instead of 3', function() {
    expect(fizzbuzz(3)).toEqual('fizz');
  });

  it ('prints buzz instead of 5', function() {
    expect(fizzbuzz(5)).toEqual('buzz');
  });

  it ('prints fizz instead of 6', function() {
    expect(fizzbuzz(6)).toEqual('fizz');
  });

  it ('prints buzz instead of 10', function() {
    expect(fizzbuzz(10)).toEqual('buzz');
  });

  it ('prints fizzbuzz instead of 15', function() {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });
});
