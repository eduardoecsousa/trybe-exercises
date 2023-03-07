import { HANDLE_CHANGE, CLEAR_INPUT } from "../actions/actionStatePesonagem";

const INITIAL_STATE = {
  character: ''
};

export const reducerHandleChange = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case HANDLE_CHANGE:
      return {
        [action.name]: action.value,
      }
      case CLEAR_INPUT:
        return {
          character: ''
        }
    default:
      return state;
  }
}