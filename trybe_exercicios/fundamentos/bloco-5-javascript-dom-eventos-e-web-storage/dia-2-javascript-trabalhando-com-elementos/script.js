//------Elementos criados ou buscado
let body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
let main = document.createElement('main');
let centerContent = document.createElement('section')
let leftContent = document.createElement('section');
let paragraph = document.createElement('p');
let rightContent = document.createElement('section');
let img = document.createElement('img');
let ul = document.createElement('ul');
let numbers = ['Um', 'Dois','Três','Quato','Cinco','Seis','Sete','Oito','Nove','Dez']
let numList = document.querySelectorAll('.numbers-list')
let h3 = document.createElement('h3');
let ah3 = document.createElement('h3');
let bh3 = document.createElement('h3');



//----atribuições

bh3.className = 'description'
h1.className = 'title'
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
ah3.className = 'description'
h3.className = 'description'
main.className = 'main-content';
centerContent.className = 'center-content';
paragraph.innerText = 'Criando um paragrafo pelo JavaScript';
leftContent.className = 'left-content';
rightContent.className = 'right-content'
img.src = 'https://picsum.photos/200'
img.className = 'small-image';
rightContent.style.marginRight = 'auto'
centerContent.parentElement.style.backgroundColor = 'green'

//-------colocando o elemento no HTML

body.appendChild(h1)
body.appendChild(main);
main.appendChild(centerContent);
centerContent.appendChild(paragraph);
main.appendChild(leftContent);
main.appendChild(rightContent);
leftContent.appendChild(img)
rightContent.appendChild(ul);
main.appendChild(h3);
main.appendChild(ah3);
main.appendChild(bh3);
main.removeChild(leftContent)


for (let i = 0; i < numbers.length; i += 1) {

  let numbersList = document.createElement('li');
  numbersList.innerText = numbers[i];
  numbersList.className = 'numbers-list'

  ul.appendChild(numbersList);
}
   
  for (let ix = 0; ix < numList.length; ix += 1){
    let num = numList[ix];  
    if (num.innerText.includes('Dez') || num.innerText.includes('Nove')){
      ul.removeChild(num)
    }
  }