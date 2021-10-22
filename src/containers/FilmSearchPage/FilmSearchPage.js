import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";
import queryString from "query-string";

import {getSearchFilms} from "../../actions/filmsSearch.action";
import searchBgImg from "../../assets/img_for_site_BackGround.jpg"

import {FilmCard} from "../../components/FilmCard/FilmCard";
import {FilmPagination} from "../../components/FilmPagination/FilmPagination";
import {Header} from "../../components/Header/Header";
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";
import {Loading} from "../../components/Loading/Loading";
import {Footer} from "../../components/Footer/Footer";

import "./FilmSearchPage.scss"



const CN = "filmSearchPage"
export const FilmSearchPage = ({match: {path}, history, location: {search}, portionSize = 10}) => {
    const [load, setLoad] = useState(false);
    const [searchFilm, setSearchFilm] = useState('');
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const {filmsSearchList, isLoading, page, totalPages} = useSelector(state => state?.filmsSearch);

    const loadSearchFilms = (query, page) => {
        dispatch(getSearchFilms(query, page))
    }

    const updateUrl = (query, page) => {
        const newParams = {
            page,
            query,
        };
        history.replace({search: queryString.stringify(newParams)});
    };

    const setPage = (pageNum) => {
        return () => {
            loadSearchFilms(searchFilm, pageNum);
            updateUrl(searchFilm, pageNum);
        };
    };

    const onSelectPost = (id) => {
        history.push(`${path}/${id}`);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const params = queryString.parse(search);
        const {page: pageFromUrl} = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        setLoad(true);

        if (searchFilm) {
            loadSearchFilms(searchFilm, pageNum)
        } else {
            setError("Enter something");
            setLoad(false);
            updateUrl('', '');
        }
    }

    const submitHandler = (e) => {
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.preventDefault();
        }

        setValidated(true)

        onSubmit(e);
    }

    return (
        <div className={CN}>
            <Header/>
            <Jumbotron path={path}/>
            <div className={`${CN}__container`} style={{backgroundImage: `url(${searchBgImg})`}}>
                <div className={`${CN}__formContainer`}>
                    <Form noValidate
                          validated={validated}
                          onSubmit={submitHandler}
                    >
                        <Form.Control
                            value={searchFilm}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearchFilm(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {error}
                        </Form.Control.Feedback>
                    </Form>
                    <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={submitHandler}
                    >
                        Search
                    </Button>
                </div>
                {
                    load && (
                        <div>
                            <FilmPagination
                                currentPage={page}
                                pageCount={totalPages}
                                portionSize={portionSize}
                                onPageClick={setPage}
                            />
                            <div>
                                {isLoading && <Loading/>}

                                {
                                    !isLoading && !filmsSearchList.length && (
                                        <div> No search film founds </div>
                                    )
                                }

                                {
                                    !isLoading && !!filmsSearchList.length && (
                                        <div className={`${CN}__filmCardsContainer`}>
                                            {
                                                filmsSearchList.map(film => (
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
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
};
