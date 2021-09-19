import {batch} from 'react-redux'
import {
    FETCH_GENRES,
    GET_GENRES,
    GET_GENRES_ERROR,
    LOADING_GENRES_END,
    LOADING_GENRES_START
} from "../actionTypes/genre.actionTypes";
import {accessToken} from "../constants";

export const getGenresSuccess = (genres) => ({type: GET_GENRES, payload: genres});
export const getGenresError = (error) => ({type: GET_GENRES_ERROR, payload: error});
export const startLoading = () => ({type: LOADING_GENRES_START});
export const endLoading = () => ({type: LOADING_GENRES_END});

export const getGenres = () => {
    // return {
    //     type: FETCH_GENRES
    // }
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${accessToken}`
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
            .then((data) => {
                batch(() => {
                    dispatch(endLoading());
                    dispatch(getGenresSuccess(data.genres));
                })
            })
            .catch(error => {
                batch(() => {
                    dispatch(endLoading());
                    dispatch(getGenresError(error))
                })
            })
    }
};
