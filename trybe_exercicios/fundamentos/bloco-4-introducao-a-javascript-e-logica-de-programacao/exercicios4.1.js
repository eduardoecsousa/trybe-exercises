//---Exercise 1

// const myName = "Eduardo";
// const birthCity ="Piraju";
// let birthYear = 2000;

// birthYear = 2030;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

//---Exercise 2

// const base = 5;
// let height = 8;
// const area = base * height;
// console.log(area)
// const perimeter = (base*2)+(height*2);
// console.log(perimeter)

//---Exercise 3

// const resultNota = 80;

// if (resultNota >= 80){
//     console.log("Parabéns, você foi aprovado(a)")
// }
// else if(resultNota < 80 && resultNota >= 60){
//     console.log("Você está na lista de espera")
// }
// else{
//     console.log("Você foi reprovado(a)")
// }

//---Exercise 4

// const currentHour = 4;
// let message;

// if (currentHour >= 22 ){
//     message = "Não deveríamos comer nada, é hora de dormir"
// }
// else if(currentHour >= 18 && currentHour < 22){
//     message = "Rango da noite, vamos jantar :D"
// }
// else if(currentHour >= 14 && currentHour < 18){
//     message="Vamos fazer um bolo para o café da tarde?"
// }
// else if (currentHour >=11 && currentHour <14){
//     message ="Hora do almoço!!!"
// }
// else if (currentHour >=4 && currentHour <11) {
//     message= "Hmmm, cheiro de café recém passado"
// }
// else{
//     message ="Dormindo"
// }

// console.log(message)


//---Exercice 5

// let weekDay = "quarta-feira";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" ||weekDay === "quarta-feira" ||weekDay === "quita-feira" ||weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// }else {
//     console.log("FINALMENTE, descanso merecido UwU")
// }

//Exercise 6


// let faixaEtaria = 'criança';

// switch (faixaEtaria) {
//   case 'adolescente':
    

//     console.log('Consulte a classificação do filme');
    

//     break;
    
    
//   case 'adulto':
    

//     console.log('A pessoa adulta é classificada para assistir qualquer filme')
  

//     break;
   
//     case 'idoso':
      
//       console.log('A pessoa idosa é classificada para assistir qualquer filme');
//       break
//   default:
   
//     console.log('só pode assistir filmes livres');
// }

//---Exercise 7

let datePerson = "aprovada";

switch (datePerson){
    case 'aprovada':
        console.log("Parabéns! você foi aprovado.")
        break;

    case 'reprovado':
        console.log('Você foi reprovado')
        break;

    case 'lista':
        console.log('Você esta na lista de espera')

    default:
        console.log('Não se aplica')    
}


