import { combineReducers } from 'redux';
import Shopping from './Reducers/Shopping';


export default combineReducers({
    cart: Shopping,
});