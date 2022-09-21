function polindromo(paramentro){
  let poli = paramentro.split("").reverse().join("");

  if(poli === paramentro){
    return console.log(true)
  }else{
    return console.log(false)
  }
}

// polindromo('tenet');


function maiorValor(nums){

  let maiorNum =  0 ;
  let maiorIndex = 0;
  
  for(let cont = 0 ; cont < nums.length;cont+=1){

    if (nums[cont] > maiorNum){
      maiorNum = nums[cont]
      maiorIndex = cont;
    }
  }
  return console.log(maiorIndex);
  
}


// maiorValor([2, 3, 6, 7, 10, 1])

function menorValor(numArray){
  let menor = Infinity;
  let menorIndex = 0;

  for (let cont = 0 ; cont <numArray.length;cont+=1){
     if (numArray[cont] < menor){
      menor = numArray[cont]
      menorIndex= cont;
     }
  }
  return menorIndex;
}

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

function nomeMaior(person){
  let maiorNome = '';

  for(let cont = 0 ; cont < person.length;cont +=1){
    let qtdCara = 0;
    for(let conf = 0;conf <person[cont].length;conf+=1){
      qtdCara+=1
    }
    if(qtdCara > maiorNome.length){
      maiorNome = person[cont];
    }
  }
  return maiorNome;
}

// console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

function numbersRepit (numeros){
  
  let armzRept = 0
  let numMaisRepit = 0;

  for(let cont = 0; cont < numeros.length;cont+=1){
    let vezesRepit = 0;

    for (let conf = 0; conf < numeros.length;conf+=1){
      if (numeros[conf] === numeros[cont]){
        vezesRepit+=1
      }
    }
    if (vezesRepit > armzRept){
      armzRept = vezesRepit 
      numMaisRepit = numeros[cont]
    }
  }
  return numMaisRepit;
}

// console.log(numbersRepit([2, 3, 2, 5, 8, 2, 3, 3, 3]))

function sumNum(n){
  let sumTotal = 0;
  for(let somaN = 1 ; somaN < n+1; somaN+=1){
    sumTotal = sumTotal+somaN;
  }
  return sumTotal;
}

// console.log(sumNum(10))

function checkEndOfWord(word, ending){

  let somaDasLetras = 0;
  
  for(let check = 0; check < ending.length; check+=1 ){

    for(let check1 = word.length - ending.length; check1 < word.length; check1+=1 ){
      if(ending[check] == word[check1]){
        somaDasLetras+=1
      }
    }
  }
  if(somaDasLetras === ending.length){
    return true;
  }
  return false;
} 

console.log(checkEndOfWord('joaoFernando','fernand'))