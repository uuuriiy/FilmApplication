import { batch } from 'react-redux'
import {accessToken} from "../constants";
import {
    GET_RECOMMENDATIONS,
    GET_RECOMMENDATIONS_ERROR, LOADING_RECOMMENDATIONS_END,
    LOADING_RECOMMENDATIONS_START
} from "../actionTypes/recommendations.actionTypes";

export const getRecommendationsSuccess = (recommendations) => ({ type: GET_RECOMMENDATIONS, payload: recommendations });
export const getRecommendationsError = (error) => ({ type: GET_RECOMMENDATIONS_ERROR, payload: error });
export const startRecommendationsLoading = () => ({ type: LOADING_RECOMMENDATIONS_START });
export const endRecommendationsLoading = () => ({ type: LOADING_RECOMMENDATIONS_END });

export const getRecommendations = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${accessToken}`;
    return (dispatch) => {
        dispatch(startRecommendationsLoading());
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
                    dispatch(endRecommendationsLoading());
                    dispatch(getRecommendationsSuccess({
                        recommendationsList: data.results,
                        // page: data.page,
                        // totalPages: data.total_pages
                    }));
                } )
            } )
            .catch(error => {
                batch ( () => {
                    dispatch(endRecommendationsLoading());
                    dispatch(getRecommendationsError(error))
                })
            })
    }
};
