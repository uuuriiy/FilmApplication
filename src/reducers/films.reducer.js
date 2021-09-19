import {GET_FILMS, LOADING_FILMS_END, LOADING_FILMS_START} from "../actionTypes/films.actionTypes";

let initialState = {
    filmsList: [],
    isLoading: false,
    page: 1,
    totalPages: 0
};


export const filmsReducer = (state = initialState ,action) => {
    switch (action.type) {
        case GET_FILMS: {
            const { payload } = action;
            return {
                ...state,
                ...payload
            }
        }
        case LOADING_FILMS_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOADING_FILMS_END: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};
