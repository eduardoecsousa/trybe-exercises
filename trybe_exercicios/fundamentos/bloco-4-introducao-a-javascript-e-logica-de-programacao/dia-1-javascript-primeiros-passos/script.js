// -----programa1

// let a = 8 ;
// let b = 2 ;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//----programa2

// let num1 = 1493;
// let num2 = 1403;

// if (num1 > num2 ){
//     console.log('O maior numero é '+num1)
// }else{
//     console.log('O maior numero é '+num2)
// }

//----programa3

// const num1 = 10029;
// const num2 = 2109;
// const num3 = 11930;

// if (num1 > num2 && num1 > num3){
//     console.log('O maior numero é '+num1)
// }
// else if (num2 > num1 && num2 > num3){
//     console.log('O maior numero é '+num2)
// }
// else if (num3 > num1 && num3 > num2){
//     console.log('O maior numero é '+num3)
// }


//-----programa4

// let parametro;

// parametro = 0;

// if (parametro < 0){
//     console.log('negative')
// }
// else if (parametro > 0){
//     console.log('positive')
// }
// else {
//     console.log('zero')
// }



// -----programa5

// let angulo1 = 60;
// let angulo2 = 60;
// let angulo3 = -10;

// let resutado = angulo1 + angulo2 + angulo3;

// if(angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
//     switch (resutado){
//         case 180 :
//             console.log(true)
//             break;
        
//         default:
//             console.log(false)
//     }
// }else {
//     console.log('Ângulo invalido')
// }

//----programa6

// let ask;

// ask = 'TORRE'.toLowerCase();




// if(ask === 'cavalo'){
//     console.log(ask + '-> em L' )
// }else if(ask === 'bispo'){
//     console.log(ask + '-> em diagonal' )
// }else if(ask === 'torre'){
//     console.log(ask + '-> em vertical e horizontal' )
// }else if(ask === 'rainha'){
//     console.log(ask + '-> em virtical, horizontal e diagolnal' )
// }else {
//     console.log('ERRO! Peça invalida!')
// }


//----programa7

// let media = 100;



// if (media > -1 && media <101){
//     if(media >= 90){
//         console.log('A')
//     }else if (media >= 80 && media < 90){
//         console.log('B')
//     }else if (media >= 70 && media < 80){
//         console.log('C')
//     }else if (media >= 60 && media < 70){
//         console.log('D')
//     }else if (media >= 50 && media < 60){
//         console.log('E')
//     }else{
//         console.log('F')
//     }
// }else{
    
//     console.log('Nota invalida!')
// }

//---programa8

// const num1 = 7;
// const num2 = 3;
// const num3 = 9;

// let resto1 = num1 %2
// let resto2 = num2 %2
// let resto3 = num3 %2


// if (resto1 === 0 || resto2 === 0 || resto3 === 0){
//     console.log(true)
// }else {
//     console.log(false);
// }

//----programa9

// const num1 = 6;
// const num2 = 4;
// const num3 = 2;

// let resto1 = num1 %2
// let resto2 = num2 %2
// let resto3 = num3 %2


// if (resto1 !== 0 || resto2 !== 0 || resto3 !== 0){
//     console.log(true)
// }else {
//     console.log(false);
// }

//----programa10

// const custProduto = 1550;
// const valProduto = 3000;

// let imposto = valProduto * 0.20;
// let custTotal = custProduto + imposto;
// let lucro = valProduto - custTotal;

// console.log('O seu lucro com essa venda foi de: '+lucro);

//---programa11

let salarioBruto = 3500;

let inss = 3500 * 0.11;
let ir = (3500 * 0.15)-354.80;
let descontosTotais = ir +inss;

let salarioLiquido = salarioBruto - descontosTotais ;

console.log (salarioLiquido);
