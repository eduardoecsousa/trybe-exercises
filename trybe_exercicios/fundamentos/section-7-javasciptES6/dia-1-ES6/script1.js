//===============================Exercicio1-part1

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true); 

//===============================Exercicio1-Part2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {

// oddsAndEvens.sort((a,b)=>{
//   if (a > b) {
//     return 1;
//   } if (a < b) {
//     return -1;
//   }
//   return 0;
// })

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// }

// sortOddsAndEvens();

//===================================mais pratica
//===================================exercicio1

// const factorial = (n) => {
//   let result = 1;

//   for(let i = n; i > 0; i -= 1){
//     result = result * i;
//   }

//   console.log(`Esse é o fatorial ${result}`)
// }


// factorial(4);


//====================================exercicio2

// const longestWord = (pharese) => {
//   const arrayPharese = pharese.split(' ');
//   let contadorTamanho = Number.MIN_SAFE_INTEGER;
//   let maiorPalvara ='';

//   for(let i of arrayPharese){
//     if (i.length > contadorTamanho){
//       maiorPalvara = i;
//     }
//   }
//   return maiorPalvara;
// }

// console.log(longestWord('Eu Sou Feliz'));

//==============================exercicio 4

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const arrayPharese = frase.split(' x ');
  
  return `${arrayPharese[0]} ${nome} ${arrayPharese[1]} `
}

const minhasSkills = () => {
  const skill = ['HTML', 'CSS', 'JavaScript'];
  let aprendido = `
  ${substituaX('eduardo')}
  Minhas três principais habilidades são: 
  -${skill[0]}
  -${skill[1]}
  -${skill[2]}`;
  return aprendido;
}

console.log(minhasSkills());