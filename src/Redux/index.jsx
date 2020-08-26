import { combineReducers } from 'redux';
import ShoppingReducer from './Reducers/Shopping';


export default combineReducers({
    cart: ShoppingReducer,
});