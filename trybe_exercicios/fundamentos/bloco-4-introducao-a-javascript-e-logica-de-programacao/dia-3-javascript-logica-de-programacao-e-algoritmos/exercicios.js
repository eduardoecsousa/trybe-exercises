//-------exercise1

// let mult =10;

// for(let i = 9 ; i >= 1 ; i-=1 ){
//   mult = mult * i;
// }

// console.log(mult)

//--------exercise2

// let word = 'trybe';

// let wordNovo = '';

// for(let i = word.length-1; i >= 0; i-=1){
//   wordNovo = wordNovo+word[i];
// }

// console.log(wordNovo)

//----OU

// console.log (word.split("").reverse().join(""))

//--------exercises3

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maior = '';

// let menor ='';

// for(let i = 0; i < array.length; i+=1){
//   let skill = array[i];
//   let caract = 0;

//   for(let ix = 0; ix < skill.length; ix+=1){
//     caract+=1
//   }


//   if(caract > maior.length){
//     maior = array[i];
//   } 
//   else if (caract < menor.length){
//     menor = array[i]
//   }
// }

// console.log(menor+ ' '+maior);


///------exercise4 

// let maior = 0;
// let vrif = 0;

// for(let i = 2 ; i < 51 ; i+=1){
//   var divisor = 0;
//   for(let ix = 0; ix < 51; ix+=1){
//     if(i % ix == 0){
//       divisor+=1
//     }
//   }
//   if(divisor == 2){
//     vrif = i;
//   }

//   if (vrif > maior){
//     maior = vrif
//   }

// }

// console.log(maior);

//----------bonus1

// let n = 10;


// for(let i = 1 ; i < n; i+=1){
//   let soma = '';
//   for (let ix = 1;ix < n; ix+=1){
    
//     soma = soma + '*'
//   }
//   console.log(soma)
// }

//---------bonus2

// let n = 6;


// for(let i = 1 ; i <= n; i+=1){
//   let soma = '';
//   for (let ix = 0; ix < i; ix+=1){
//      soma = soma + '*';
//   }
  
//   console.log(soma)
// }

//----------bonus3

// let n = 6;


// for(let i = 1 ; i <= n; i+=1){
//   let soma = '';
//   for (let ix = 0; ix < n - i; ix+=1){
//      soma = soma + ' ';
//   }
//   for(let iy = 0; iy < i; iy+=1){
//     soma = soma + '*'
//   }
  
//   console.log(soma)
// }

//-------bonus4 

let n = 6;


for(let i = 1 ; i <= n; i+=1){
  let soma = '';
  for (let ix = 0; ix < n - i; ix+=1){
     soma = soma + ' ';
  }
  for(let iy = i; iy >= 1; iy-=1){
    soma = soma + '* '
  }
  for(let ia =2; ia <= i;ia+=1 ){
    soma=soma +'';
  }
  
  console.log(soma)
}
