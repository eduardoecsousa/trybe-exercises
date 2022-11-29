import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case 'NEXT_COLOR':
      if(state.index === state.colors.length - 1){
        return {
          colors: state.colors,
          index: 0
        }
      } else {
        return {
          colors: state.colors,
          index: state.index + 1
        }
      }
    case 'PREVIOUS_COLOR':
      if(state.index === 0){
        return {
          colors: state.colors,
          index: 0
        }
      } else {
        return {
          colors: state.colors,
          index: state.index - 1
        }
      }
    case 'RANDOM_COLOR' : 
    return {
      colors: [...state.colors, criarCor()],
      index: state.colors.length
    }
    default :
      state
  }
  return state;
} 

const store = createStore(reducer, composeWithDevTools());
const actionNext = { type: 'NEXT_COLOR' }
const actionPrev = { type: 'PREVIOUS_COLOR'}
const actionRandom = { type: 'RANDOM_COLOR'}

const buttonNext = document.querySelector('#next')
const buttonPrevious = document.querySelector('#previous')
const buttonRandom = document.getElementById('random');

buttonNext.addEventListener('click', () => {
    store.dispatch(actionNext)
})

buttonPrevious.addEventListener('click', () => {
  store.dispatch(actionPrev)
})

buttonRandom.addEventListener('click', () => {
  store.dispatch(actionRandom);
})

store.subscribe(() => {
  const globalState = store.getState();

  const color = document.querySelector('#value');
  color.innerHTML = globalState.colors[globalState.index]

  const container = document.getElementById('container')
  container.style.backgroundColor = globalState.colors[globalState.index]
})

