import React from 'react';

import {useHistory} from "react-router-dom";

import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import {FilmDetails} from "../FilmDetails/FilmDetails";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import {Jumbotron} from "../Jumbotron/Jumbotron";
import {Loading} from "../Loading/Loading";

import {NOT_FOUND} from "../../constants";

export const DetailsPage = ({id, film, loading, list}) => {
    const history = useHistory();
    return (
        <>
            <Header/>
            <Jumbotron/>
            <div>
                {!film && history.push(NOT_FOUND)}

                {loading && <Loading/>}

                {!loading && !list.length && (
                    <div> No film found </div>
                )}

                {!loading && !!list.length && (
                    <ErrorBoundary>
                        <FilmDetails id={id} film={film}/>
                    </ErrorBoundary>
                )}
            </div>
            <Footer/>
        </>
    );
};
