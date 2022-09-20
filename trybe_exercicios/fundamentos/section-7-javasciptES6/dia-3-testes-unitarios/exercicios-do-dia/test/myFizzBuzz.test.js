const myFizzBuzz = require('../myFizzBuzz');

describe('function myFizzBuzz()', () => {
  it('myFizzBuzz get a number divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })
  it('myFizzBuzz get a number divisible by 3', () => {
    expect(myFizzBuzz(6)).toMatch('fizz');
  })
  it('myFizzBuzz get a number divisible by 5', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  })
  it('myFizzBuzz get a number not divisible by 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  it('myFizzBuzz receives a variable that is not a number', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  })

})