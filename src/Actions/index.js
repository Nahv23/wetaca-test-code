
export const ADD_DISH_TO_CART = 'ADD_DISH_TO_CART';
export const addDishToCartAction = (dispatch) => (dish) => dispatch({ type: ADD_DISH_TO_CART , value: dish });

