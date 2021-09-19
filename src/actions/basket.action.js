import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from "../actionTypes/basket.actionTypes";

export const addToBasket = (item) => ({type: ADD_TO_BASKET, payload: item})
export const removeFromBasket = (id) => ({type: REMOVE_FROM_BASKET, payload: id})
