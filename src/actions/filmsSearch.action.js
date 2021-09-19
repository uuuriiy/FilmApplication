import {batch} from 'react-redux'
import {
    GET_SEARCH_FILMS,
    GET_SEARCH_FILMS_ERROR, LOADING_SEARCH_FILMS_END,
    LOADING_SEARCH_FILMS_START
} from "../actionTypes/filmSearch.actionTypes";
import {accessToken} from "../constants";

export const getSearchMoviesSuccess = (filmsSearch) => ({type: GET_SEARCH_FILMS, payload: filmsSearch});
export const getSearchMoviesError = (error) => ({type: GET_SEARCH_FILMS_ERROR, payload: error});
export const startSearchLoading = () => ({type: LOADING_SEARCH_FILMS_START});
export const endSearchLoading = () => ({type: LOADING_SEARCH_FILMS_END});

export const getSearchFilms = (query, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${accessToken}&query=${query}&page=${page}`;
    return (dispatch) => {
        dispatch(startSearchLoading());
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response;
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                batch(() => {
                    dispatch(endSearchLoading());
                    dispatch(getSearchMoviesSuccess({
                        filmsSearchList: data.results,
                        page: data.page,
                        totalPages: data.total_pages
                    }));
                })
            })
            .catch(error => {
                batch(() => {
                    dispatch(endSearchLoading());
                    dispatch(getSearchMoviesError(error))
                })
            })
    }
};
