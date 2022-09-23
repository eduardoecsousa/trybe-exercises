const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const colocaPreco = products.map((produt, index) => {
  const tabelaPreco = {};
  tabelaPreco[produt] = prices[index];
  return tabelaPreco;
})

console.log(colocaPreco)