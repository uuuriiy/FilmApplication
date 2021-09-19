import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import queryString from "query-string";

import {getFilms} from "../../actions/films.action";

import {FilmCard} from "../../components/FilmCard/FilmCard";
import {FilmPagination} from "../../components/FilmPagination/FilmPagination";
import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";
import {Loading} from "../../components/Loading/Loading";

import "./FilmsList.scss"


const CN = 'filmsList'
export const FilmsList = ({match: {path}, history, location: {search}, portionSize = 10}) => {
    const dispatch = useDispatch();
    const {filmsList, isLoading, page, totalPages} = useSelector(state => state?.films);

    useEffect(() => {
        const params = queryString.parse(search);
        const {page: pageFromUrl} = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        loadFilms(pageNum)
    }, []);

    const loadFilms = (page) => {
        dispatch(getFilms(page))
    }

    const updateUrl = (page) => {
        const newParams = {
            page
        };
        history.replace({search: queryString.stringify(newParams)});
    };

    const setPage = (page) => {
        return () => {
            loadFilms(page);
            updateUrl(page);
        };
    };


    const onSelectPost = (id) => {
        history.push(`${path}/${id}`);
    };

    return (
        <div className={CN}>
            <Header/>
            <Jumbotron path={path}/>
            <FilmPagination
                currentPage={page}
                pageCount={totalPages}
                portionSize={portionSize}
                onPageClick={setPage}
            />
            <div>
                {
                    isLoading && <Loading/>
                }

                {
                    !isLoading && !filmsList.length && (
                        <div> No movie founds </div>
                    )
                }

                {
                    !isLoading && !!filmsList.length && (
                        <div className={`${CN}__container`}>
                            {
                                filmsList.map(film => (
                                    <FilmCard
                                        key={film.id}
                                        id={film.id}
                                        film={film}
                                        onSelect={onSelectPost}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
};
