const sum = require('./exercicio2');

describe('Verica de a função "sum"', () => {
  it('esta somando os numeros passados como parametro e coloca qualquer quantidade', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(1,2,3,4)).toBe(10)
    expect(sum(1,2,3,4,5)).toBe(15)
    expect(sum(1,2,3,4,5,6)).toBe(21)
  })
})