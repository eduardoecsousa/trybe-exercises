function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysMouth(){
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.querySelector('#days');

  for (let i = 0; i < decemberDaysList.length;i += 1){
    const day = decemberDaysList[i];
    const dayMouthList = document.createElement('li');
    dayMouthList.innerHTML = day;
    dayMouthList.className = 'day'
    if(day === 24 || day === 25 || day === 31){
      dayMouthList.classList.add('holiday')
    }
    if (day === 4 || day === 11 || day === 18 || day === 25){
      dayMouthList.classList.add('friday')
    }

    days.appendChild(dayMouthList);
  }
}

createDaysMouth();

let buttonContainer = document.querySelector('.buttons-container');

function createButton (){
  
  let button = document.createElement('button')
  button.id = 'btn-holiday'
  button.className = 'btn-day'
  button.innerHTML = 'Feriados'

  buttonContainer.appendChild(button);
}

createButton();

let x = 0;

function changeColor() {
  let holiday = document.querySelectorAll('.holiday');
    if (x === 1){
      for(let i = 0; i < holiday.length; i += 1){
      holiday[i].style.backgroundColor = 'rgb(238,238,238)'
    }  
      x = 0;

  } else {
    for(let ix = 0; ix < holiday.length; ix += 1){
    holiday[ix].style.backgroundColor = 'rgb(139, 148, 146)'
    holiday[ix].style.borderRadius = '3px'
    }

    x = 1;
  }
}

let button = document.getElementById('btn-holiday');
button.addEventListener('click',changeColor);

function createButtonFriday(){
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday'
  btnFriday.innerHTML = 'Sexta-feira'
  btnFriday.className = 'btn-day'
  

  buttonContainer.appendChild(btnFriday)
}

createButtonFriday();
let buttonFriday = document.getElementById('btn-friday');

let y = 0;
function turnsFriday(){
  let daysFriday = document.querySelectorAll('.friday');
  let saveDays = [4, 11, 18, 25];
  if(y === 1){
    for(let ix = 0; ix < saveDays.length; ix += 1){
      daysFriday[ix].innerHTML = saveDays[ix];
      y = 0;
    }
  }else{
    for(let i = 0; i < daysFriday.length; i += 1){
      daysFriday[i].innerHTML = 'SEXTOU!!'
      y=1;
    }
  }
}

buttonFriday.addEventListener('click', turnsFriday)

function zoom (event){

  event.target.style.fontWeight = '600'
  event.target.style.fontSize = '2em'

}

function noZoom(event){
  event.target.style.fontWeight = '500'
  event.target.style.fontSize = '20px'
}

let lis = document.querySelectorAll('#days > li')

for(let i = 0; i < lis.length; i += 1){
  lis[i].style.transition = '0.5s'
  lis[i].addEventListener('mouseover', zoom);
}

for(let i = 0; i < lis.length; i += 1){
  lis[i].addEventListener('mouseleave', noZoom);
}

let myTasks = document.querySelector('.my-tasks');

function customTask (getTask){

  let task = document.createElement('span');
  task.innerHTML = getTask;

  myTasks.appendChild(task);
}

customTask('Cozinhar');



function addColor(cor){
  let legend = document.createElement('div')
  legend.className = 'task'
  legend.style.backgroundColor = cor;

  myTasks.appendChild(legend);
}

addColor('green');



let selectTask = document.querySelectorAll('.task')
function addClass(event){
  let newClass = event.target;
  
  newClass.classList.toggle('selected');
}

selectTask[0].addEventListener('click', addClass);


for(let i = 0; i<lis.length; i+=1){
lis[i].addEventListener('click', function(event){
  let select = document.querySelector('.selected');
  let daySelect = event.target;

    if(daySelect.classList.contains('daySelect')){
      daySelect.style.color = 'rgb(119,119,119)'
      daySelect.classList.remove('daySelect');
    } else {
    daySelect.style.color = select.style.backgroundColor;
    console.log(select.style.backgroundColor);
    daySelect.classList.add('daySelect');
  }

})
}



// Escreva seu código abaixo.