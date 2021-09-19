import {
    GET_RECOMMENDATIONS,
    LOADING_RECOMMENDATIONS_END,
    LOADING_RECOMMENDATIONS_START
} from "../actionTypes/recommendations.actionTypes";

let initialState = {
    recommendationsList: [],
    isLoading: false,
    // page: 1,
    // totalPages: 0
};


export const recommendationsReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_RECOMMENDATIONS: {
            const { payload } = action;
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_RECOMMENDATIONS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_RECOMMENDATIONS_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
