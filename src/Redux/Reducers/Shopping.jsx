import { ADD_DISH_TO_CART } from '../../Actions';

let initialState = {
    cart: [],
};

const shopping = (state = initialState, action) => {
    console.log("que hay", action.value)
    switch (action.type) {
        case ADD_DISH_TO_CART:
            return Object.assign({}, state, {
                dish: action.value,
            });
        default:
            return state;
    }
};

export default shopping