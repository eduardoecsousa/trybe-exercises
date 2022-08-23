// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// //---------exercicio1

// // console.log('Bem-vinda, '+info.personagem)

// //---------exercicio2

// info['recorrente']= 'Sim'

// // console.log(info)

// //----------exercicio3
// // for(let key in info){
// //   console.log(key)
// // }

// //-----------exercicio4

// // for(let key in info){
// //   console.log(info[key])
// // }

// //-----------exercicio5

// let info1 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente:'Sim'
// };
// let information ={
//  characters : info.personagem+' e '+info1.personagem,
//  origin : info.origem+' e '+info1.origem,
//  note : info.nota+' e '+info1.nota,
//  recurrent : info.recorrente+' e '+info1.recorrente
// }

// if(info.recorrente === 'Sim' && info1.recorrente === 'Sim'){
//   information['recurrent']='Ambos recorrentes'
// }

//   for(let key in information){
//     console.log(information[key])
//   }

//--------exercicio6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let fullname = leitor.nome+' '+leitor.sobrenome;
let book = leitor.livrosFavoritos


console.log('O livro favorito de '+fullname+' se chama '+"'"+book[0].titulo+"'")

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

console.log(book[1])

console.log(leitor.nome+' tem '+book.length+' livros favoritos')

