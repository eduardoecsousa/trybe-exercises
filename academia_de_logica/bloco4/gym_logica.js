let num = [12 , 21 , 40, 50, 43, 239 , 103, 405,68]
let n2 = 12;
let estado = false;

for(let i = 0 ; i < num.length; i+=1){
    if(num[i] === n2 ){
        console.log("a posição do " +n2+ " é " +  i);
        estado = true;
    } 
    else if (estado === false && i == num.length-1){
        console.log('Elemento não encontrado no array');
    }
}

//-----------exercicio2

// for(let i = 0 ; )
