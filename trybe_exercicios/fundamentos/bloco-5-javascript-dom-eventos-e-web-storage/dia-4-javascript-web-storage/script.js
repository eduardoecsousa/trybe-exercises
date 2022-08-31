const selection = document.getElementById('seletion');

function createDiv (nameclass, txt, classSelect){
  let createDiv = document.createElement('div')
  createDiv.className = nameclass;

  let createParagrapho = document.createElement('p');
  createParagrapho.innerHTML = txt;

  let createSelect = document.createElement('select')
  createSelect.className = classSelect;

  selection.appendChild(createDiv)
  createDiv.appendChild(createParagrapho)
  createDiv.appendChild(createSelect)
}

createDiv('backgroud', 'Selecione a cor de fundo:','selectColorBack');
createDiv('color', 'Selecione a cor do texto:', 'selectTextColor');
createDiv('font', 'Selecione o tamanho da fonte:', 'selectTamFont');
createDiv('space', 'Selecione o espaçamento de linha:', 'selectSpaceLine');
createDiv('fontFamilt', 'Selecione qual o tipo de fonte:', 'selectFontFamily');



function addOpition (classSelect, val, txt){
  let opition = document.createElement('option');
  opition.value = val;
  opition.innerHTML = txt;
  let classSlct = document.querySelector('.'+classSelect)
  classSlct.appendChild(opition);
}

addOpition('selectColorBack','white','Selecione');
addOpition('selectTextColor','black','Selecione');
addOpition('selectTamFont','16px','Selecione');
addOpition('selectSpaceLine','17px','Selecione');
addOpition('selectFontFamily','sans-serif','Selecione');


let body = document.getElementsByTagName('body');


function alterBackgroud (event){
  let eventTriggered = event.target;
  body[0].style.backgroundColor = eventTriggered.value;
}
addOpition('selectColorBack','green','Verde');
addOpition('selectColorBack','red','Vermelho');
addOpition('selectColorBack','blue','Azul');
addOpition('selectColorBack','brown','Marrom');
addOpition('selectColorBack','black','Preto');


let selectColorBack = document.querySelector('.selectColorBack');
selectColorBack.addEventListener('click',alterBackgroud);

function alterColorText(event){
  let eventTriggered = event.target;
  body[0].style.color = eventTriggered.value;
}

addOpition('selectTextColor','#BE529E','Rosa');
addOpition('selectTextColor','#FBCB0A','Amarelo');
addOpition('selectTextColor','#FF6F3B','Laranja');
addOpition('selectTextColor','#4A1096','Roxo');


let selectTextColor = document.querySelector('.selectTextColor');
selectTextColor.addEventListener('click', alterColorText);

function alterFontSize(event){
  let eventTriggered = event.target;
  body[0].style.fontSize = eventTriggered.value;
}

let selectFontSize = document.querySelector('.selectTamFont')
selectFontSize.addEventListener('click',alterFontSize); 

addOpition('selectTamFont','20px','20');
addOpition('selectTamFont','22px','22');
addOpition('selectTamFont','26px','26');
addOpition('selectTamFont','32px','32');

function alterSpaceLine(event){
  let eventTriggered = event.target;
  body[0].style.lineHeight = eventTriggered.value;
}

let selectSpaceLine = document.querySelector('.selectSpaceLine');
selectSpaceLine.addEventListener('click', alterSpaceLine)

addOpition('selectSpaceLine','19px','19');
addOpition('selectSpaceLine','21px','21');
addOpition('selectSpaceLine','24px','24');
addOpition('selectSpaceLine','28px','28');
addOpition('selectSpaceLine','34px','34');
addOpition('selectSpaceLine','40px','40');


function alterFontFamily(event){
  let eventTriggered = event.target;
  body[0].style.fontFamily = eventTriggered.value;
}

let selectFontFamily = document.querySelector('.selectFontFamily');
selectFontFamily.addEventListener('click', alterFontFamily)

addOpition('selectFontFamily','monospace','Monospace');
addOpition('selectFontFamily','Arial','Arial');
addOpition('selectFontFamily','roboto','roboto');
addOpition('selectFontFamily','Verdana','Verdana');
addOpition('selectFontFamily','Cedarville Cursive','Cedarville Cursive');
