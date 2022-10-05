const swap = require('./exercicio5');

describe('Verica a função "swap"', () => {
  it('Verica se o primeiro e o ultimo elemento são invertidos ', () => {
    const list1 = [2, 7, 6];
    const list2 = [12, 44, 36];
    const list3 = [42, 49, 66];
    expect(swap(list1)).toEqual([6, 7, 2]);
    expect(swap(list2)).toEqual([36, 44, 12]);
    expect(swap(list3)).toEqual([66, 49, 42]);

  })
})