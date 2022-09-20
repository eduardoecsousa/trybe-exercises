const {encode, decode} = require('./encodeAndDecode');

describe('function encode()', () => {
  it('if encode() is a function', () => {
    expect(typeof(encode)).toMatch('function')
  })
  it('if vowels "aeiou" are converter 12345', () => {
    expect(encode('aeiou')).toMatch('12345');
  })
  it('if the other Vowels are not converted', () => {
    expect(encode('bcsql')).toMatch('bcsql')
  })
  it('returns the same number of characters passed in the parameter', () => {
    expect(encode('bcsqla').length).toBe(6)
  })
})

describe('function deconde()', () => {
  it('if decode() is a function', () => {
    expect(typeof(decode)).toMatch('function')
  })
  it('if number "12345" are converted to vowels "aeiou"', () => {
    expect(decode('12345')).toMatch('aeiou');
  })
  it('if the other numbers are not converted', () => {
    expect(decode('67897')).toMatch('67897');
  })
  it('returns the same number of characters passed in the parameter', () => {
    expect(decode('67897').length).toBe(5);
  })
})
