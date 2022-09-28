const {rectangleArea, printTriangle} = require('./exercicio1');

describe('Verifica se a função rectangleArea retorno a multiplicação de dois numeros', () => {
  it('[1, 2] , [3, 5], [6, 9]', () => {
    expect(rectangleArea(1, 2)).toBe(2);
    expect(rectangleArea(3, 5)).toBe(15);
    expect(rectangleArea(6, 9)).toBe(54);
  })
})