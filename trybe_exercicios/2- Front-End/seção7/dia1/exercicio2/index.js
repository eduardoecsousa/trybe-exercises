import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': 
      if (state.theme === 'dark') {
        return { theme: 'light'}
      } else {
        return { theme: 'dark'}
      }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS': 
      if (state.status === 'offline') {
        return { status: 'online'}
      } else {
        return { status: 'offline'}
      }
    default:
      return state;
  }
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const actionTheme = { type: 'CHANGE_THEME' }
const actionStatus = { type: 'CHANGE_STATUS' }

const reducer = combineReducers({status: statusReducer, theme: themeReducer})
console.log(reducer);

const store = createStore(reducer, composeWithDevTools());

themeButton.addEventListener('click', () => {
  store.dispatch(actionTheme);
});

statusButton.addEventListener('click', () => {
  store.dispatch(actionStatus);
});

store.subscribe(() => {
  const globalState = store.getState();

  const { theme: { theme }, status: { status } } = globalState;
  const body = document.getElementById('body');
  const statusEl = document.getElementById('status');
  const themBtn = document.getElementById('theme-btn');
  const StatusBtn = document.getElementById('status-btn');

  if ( theme === 'light') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    themBtn.innerHTML = 'Dark'
  } else {
    body.style.backgroundColor = '#333';
    body.style.color = 'white';
    themBtn.innerHTML = 'Light'
  }

  if( status === 'online') {
    statusEl.innerHTML = 'Online';
    StatusBtn.innerHTML = 'Offiline'
  } else {
    statusEl.innerHTML = 'Offline';
    StatusBtn.innerHTML = 'Online'
  }
})