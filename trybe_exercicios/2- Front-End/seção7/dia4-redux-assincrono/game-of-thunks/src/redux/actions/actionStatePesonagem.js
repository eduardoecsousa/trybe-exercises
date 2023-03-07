export const REQUEST_API = 'REQUEST_API';
export const GET_CHARACTER = 'GET_PICTURE';
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const CLEAR_INPUT = 'CLEAR_INPUT'

export const requestAPI = () => ({ type: REQUEST_API });

export const handleChange = (name, value) => ({type: HANDLE_CHANGE, name, value})
export const clearInput = (name, value) => ({type: CLEAR_INPUT})

export const getCharacter = (data) => ({ type: GET_CHARACTER, data });

export function fetchAPI(name) {
  // Desenvolva aqui o código da action assíncrona
  return async (dispatch) => {
    dispatch(requestAPI())
    dispatch(clearInput());
    return fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then((response) => response.json())
      .then((json) => dispatch(getCharacter(json)))
    
  }
}
