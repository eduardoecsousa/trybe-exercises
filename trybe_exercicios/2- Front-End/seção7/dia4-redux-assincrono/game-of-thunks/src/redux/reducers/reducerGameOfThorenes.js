import { REQUEST_API, GET_CHARACTER } from "../actions/actionStatePesonagem";

const INITIAL_STATE = {
  isLoading: false,
  dateCharacter: {},
  default: false,
};

export const reducerGameofThorene = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case REQUEST_API:
    return {
      ...state,
        isLoading: true,
        defaultImg: false,
    }
  case GET_CHARACTER: 
    return {
      ...state,
        isLoading: false,
        dateCharacter: action.data,
        defaultFetch: true,
    }
   default:
    return state;
 }
}