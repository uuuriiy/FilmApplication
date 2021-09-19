import {
    GET_SEARCH_FILMS,
    LOADING_SEARCH_FILMS_START,
    LOADING_SEARCH_FILMS_END
} from "../actionTypes/filmSearch.actionTypes";

let initialState = {
    filmsSearchList: [],
    isLoading: false,
    page: 1,
    totalPages: 0
};


export const filmsSearchReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_SEARCH_FILMS: {
            const { payload } = action;
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_SEARCH_FILMS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_SEARCH_FILMS_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
