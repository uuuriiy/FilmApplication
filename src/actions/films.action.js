import {
    GET_FILMS, GET_FILMS_ERROR,
    LOADING_FILMS_END, LOADING_FILMS_START
} from "../actionTypes/films.actionTypes";
import {batch} from "react-redux";
import {accessToken} from "../constants";

export const getMoviesSuccess = (movies) => ({ type: GET_FILMS, payload: movies });
export const getMoviesError = (error) => ({ type: GET_FILMS_ERROR, payload: error });
export const startLoading = () => ({ type: LOADING_FILMS_START });
export const endLoading = () => ({ type: LOADING_FILMS_END });

export const getFilms = (page) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${accessToken}&page=${page}`
    return (dispatch) => {
        dispatch(startLoading());
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
            .then( (data) => {
                batch( () => {
                    dispatch(endLoading());
                    dispatch(getMoviesSuccess({
                        filmsList: data.results,
                        page: data.page,
                        totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endLoading());
                    dispatch(getMoviesError(error))
                })
            })
    }
}
