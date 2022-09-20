const myRemove = require('../my_remove');

describe('function myRemove()', () => {
  it('if myRemove([1, 2, 3, 4], 3) is [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
  })
  it ('if myRemove([1, 2, 3, 4], 3) not return array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  it('if myRemove([1, 2, 3, 4], 5) return array expected', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})