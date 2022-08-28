document.getElementById('elementoOndeVoceEsta').parentElement.style.background = 'blue'

document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Primeito filho do filho';

document.getElementById('pai').firstElementChild;

document.getElementById('elementoOndeVoceEsta').previousElementSibling;

document.querySelector('#elementoOndeVoceEsta').nextSibling;

document.getElementById('elementoOndeVoceEsta').nextElementSibling;

document.getElementById('pai').lastElementChild.previousElementSibling;


let fother = document.querySelector('#pai');

let elementWhere = document.querySelector('#elementoOndeVoceEsta');

let sonOfSon = document.getElementById('primeiroFilhoDoFilho');

let brother = document.createElement('section');
brother.setAttribute('id','brother');

let sonElementWhere = document.createElement('section');
sonElementWhere.setAttribute('class', 'sonElement');

let primarySonOfSon = document.createElement('p')
primarySonOfSon.innerText = 'esse paragrado ta bacana!';
primarySonOfSon.setAttribute('class','son');

elementWhere.appendChild(sonElementWhere);
fother.appendChild(brother);
sonOfSon.appendChild(primarySonOfSon);

// console.log(document.querySelector('.son').parentNode.parentNode.parentNode.lastChild.previousSibling.previousSibling.previousSibling.previousSibling)

console.log(document.getElementsByClassName('son')[0].parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling)

let img = document.createElement('img');
img.src='https://resultadosdigitais.com.br/files/2015/08/thestocks-imagem.jpg';
img.className = 'imgAleatoria'

fother.appendChild(img)