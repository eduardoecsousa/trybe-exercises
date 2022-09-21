function hydrate(numBebidas) {
  const arrayNum = numBebidas.split(' ');
  let coposDeAgua = 0;
  for (let i = 0; i < arrayNum.length; i += 1){
    if (!isNaN(arrayNum[i]) === true){
      coposDeAgua += Number(arrayNum[i]);
    }
  }
  
  if (coposDeAgua === 1) {
    return `${coposDeAgua} copo de água`
  }
   return `${coposDeAgua} copos de água`
}



console.log(hydrate('2 cervejas'))

module.exports = hydrate