// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite-condensado', 'Leito me pó', 'mel'];

const fruitSalad = (fruit, additional) => {
  const saladFruit = [...fruit, ...additional];
  return saladFruit
};

console.log(fruitSalad(specialFruit, additionalItens));