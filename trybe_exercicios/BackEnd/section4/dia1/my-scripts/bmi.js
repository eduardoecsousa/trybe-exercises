"use strict";
const redline = require('readline-sync');
const verificationCategory = (valor) => {
    if (valor < 18.5) {
        return 'Abaixo do peso (magreza)';
    }
    else if (valor >= 18.5 && valor <= 24.9) {
        return 'Peso normal';
    }
    else if (valor >= 25.0 && valor <= 29.9) {
        return 'Acima do peso (sobrepeso)';
    }
    else if (valor >= 30.0 && valor <= 34.9) {
        return 'Obesidade grau I';
    }
    else if (valor >= 35.0 && valor <= 39.9) {
        return 'Obesidade grau II';
    }
    return 'Obesidade graus III e IV';
};
const bmi = () => {
    const weight = redline.questionFloat('Qual o seu peso? \n');
    const height = redline.questionFloat('Qual a sua altura? \n');
    const response = weight / (height ** 2);
    const category = verificationCategory(response);
    return `-Seu IMC é de: ${response} \n-E sua situação é de : ${category}`;
};
console.log(bmi());
