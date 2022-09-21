const verifc = (aposta, sorteado) => (aposta === sorteado) ? true : false;

const loteria = (num, func) => {
  let numLoteria = Math.round((Math.random()* 5) + 1)
  
  if(func(num, numLoteria) === true) {
    return 'Parabéns você ganhou'
  }
  return 'Tente novamente'
}

console.log(loteria(2, verifc));