// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// //diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo


//--------exercicio de fixação 1

// let player = {
//   name : 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals :{
//     golden:2,
//     silver: 3,
//   }
// }

// console.log('A jogadora '+player.name+' '+player.lastName+' tem '+player.age+' anos de idade.');

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// let bestYear = player['bestInTheWorld'];

// let fullName = player.name+' '+player.lastName;

// console.log('A Jogadora '+fullName+' foi eleita a melhor do mundo por 6 vezes: '+bestYear );

// console.log('A jogadora possui '+player.medals.golden+' medalhas de ouro e '+player.medals.silver+' medalhas de prata.');

//--------Exercicio para fixação 2 

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for(let key in names){
//   console.log('Olá '+names[key])
// }

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log(key,car[key])
}