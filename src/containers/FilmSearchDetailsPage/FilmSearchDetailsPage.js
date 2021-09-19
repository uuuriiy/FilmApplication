import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {getSearchFilms} from "../../actions/filmsSearch.action";

import {DetailsPage} from "../../components/DetailsPage/DetailsPage";


export const FilmSearchDetailsPage = ({match: {params: {id}}}) => {
    const dispatch = useDispatch();
    const {filmsSearchList, isLoading} = useSelector(state => state?.filmsSearch);

    useEffect(() => {
        loadSearchFilms();
    }, []);

    const loadSearchFilms = () => {
        dispatch(getSearchFilms("", id))
    }

    const searchFilm = filmsSearchList.find(film => film.id === +id);

    return (
        <DetailsPage
            id={id}
            loading={isLoading}
            film={searchFilm}
            list={filmsSearchList}
        />
    );
};
