import {SET_USER} from "../actionTypes/userCreate.actionTypes";

let initialState = {
    user: null
}

export const userCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
