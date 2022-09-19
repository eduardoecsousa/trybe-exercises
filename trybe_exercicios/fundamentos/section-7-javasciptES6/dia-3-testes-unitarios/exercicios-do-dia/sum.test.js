const sum = require('./sum');

describe('function sum()', () => {
  it('sum(4, 5) is 9', () => {
    expect(sum(4,5)).toBe(9)
  })
  it('sum(0, 0) is 0', () => {
    expect(sum(0,0)).toBe(0)
  })
  it("sum(4,'5') is Error", () => {
    expect(() => sum(4,'5')).toThrow(Error)
  })
  it("sum(4,'5') is menssage 'parameters must be numbers'", () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers')
  })
})