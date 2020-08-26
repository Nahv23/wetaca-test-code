import { ADD_DISH_TO_CART } from '../../Actions';


export const createDishState = () => ({
    cart: []
    // dishName: null,
    // dishPrice: null,
    // quantity: null
});

const shopping = (state = createDishState(), action) => {
    switch (action.type) {
        case ADD_DISH_TO_CART:
            state.cart.push ({
                    dishName: action.value.name,
                    dishPrice: action.value.price
                })
            return state
        // return Object.assign({}, state, {
            //     dishName: action.value.name,
            //     dishPrice: action.value.price
            // });
        default:
            return state;
    }
};

export default shopping