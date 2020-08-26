import { ADD_DISH_TO_CART } from '../../Actions';


export const createDishState = () => ({
    cart: []
});

const shopping = (state = createDishState(), action) => {
    switch (action.type) {
        case ADD_DISH_TO_CART:
            state.cart.push({
                dishName: action.value.name,
                dishPrice: action.value.price,
                quantity: action.value.quantity
            });
            return state;
        default:
            return state;
    }
};

export default shopping