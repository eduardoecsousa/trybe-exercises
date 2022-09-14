let player1 = 'pedra';
let player2 = 'pedra';

if(player1 === 'tesoura' && player2 === 'papel'){
  console.log("Player 1 won")
}else if(player1 === 'papel' && player2 === 'tesoura'){
  console.log("Player 2 won")
}else if(player1 === 'pedra' && player2 === 'papel'){
  console.log("Player 2 won")
}else if(player1 === 'papel' && player2 === 'pedra'){
  console.log("Player 1 won")
}else if(player1 === 'pedra' && player2 === 'tesoura'){
  console.log("Player 1 won")
}else if(player1 === 'tesoura' && player2 === 'pedra'){
  console.log("Player 2 won")
} else {
  console.log("A Ties")
}
