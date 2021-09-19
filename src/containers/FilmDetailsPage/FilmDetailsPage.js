import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {getFilms} from "../../actions/films.action";

import {DetailsPage} from "../../components/DetailsPage/DetailsPage";


export const FilmDetailsPage = ({match: {params: {id}}}) => {
    const dispatch = useDispatch();
    const {filmsList, isLoading} = useSelector(state => state?.films);

    useEffect(() => {
        loadFilms()
    }, []);

    const loadFilms = () => {
        dispatch(getFilms(id))
    }

    const film = filmsList.find(film => film.id === +id);

    return (
        <DetailsPage
            id={id}
            loading={isLoading}
            film={film}
            list={filmsList}
        />
    )

};
