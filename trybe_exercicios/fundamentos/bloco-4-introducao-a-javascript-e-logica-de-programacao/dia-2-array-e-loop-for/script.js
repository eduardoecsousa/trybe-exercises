let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//--------exercise5

// let vetor = 0;
// let maior = 0;

// for(let i = 0; i < numbers.length; i+=1){
//     vetor = numbers[i]
//     if(vetor > maior){
//         maior = vetor; 
//     }
// }

// console.log(maior);

//---------exercise6

// let cont;
// let somaImpar = 0;

// for(let i = 0 ; i < numbers.length; i+=1){
//     cont = numbers[i] % 2;
//     if(cont !== 0){
//         somaImpar+=1
//     }
// }

// if (somaImpar > 0){
//     console.log(somaImpar)
// }else{
//     console.log('nenhum valor ímpar encontrado')
// 

//----------exercise7


// let vetor = 0;
// let menor = numbers.length-1

// for(let i = 0; i < numbers.length; i+=1){
//     vetor = numbers[i]
//     if(menor > vetor){
//         menor = vetor; 
//     }
// }

// console.log(menor);


//-----------exercise8e9

let arrayNovo = [];

for(let i = 1; i<26;i+=1){
    arrayNovo.push(i);
}

for(let ix = 0 ; ix < arrayNovo.length; ix+=1 ){
    let result = arrayNovo[ix]/2
    console.log(result)
}