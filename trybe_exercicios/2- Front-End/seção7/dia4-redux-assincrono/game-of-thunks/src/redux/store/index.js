import { combineReducers } from 'redux';
import { reducerGameofThorene } from '../reducers/reducerGameOfThorenes';
import { reducerHandleChange } from '../reducers/reducerInput';

const rootReducer = combineReducers({ reducerGameofThorene, reducerHandleChange })

export default rootReducer;