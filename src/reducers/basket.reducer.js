import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from "../actionTypes/basket.actionTypes";

const initialState = {
    basket: []
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload],
            };
        case REMOVE_FROM_BASKET:
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketIndex) => basketIndex.id === action.payload
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(` Cant remove product `);
            }

            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
};
