import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {getGenres} from "../../actions/genres.action";

import {Loading} from "../Loading/Loading";

import "./Genres.scss"


const CN = "genres"
export const Genres = ({genreIds}) => {
    const dispatch = useDispatch();
    const {genreList, isLoading} = useSelector( state => state?.genres);

    useEffect(() => {
        loadGenres()
    }, []);

    const loadGenres = () => {
        dispatch(getGenres())
    }

    return (
        <div className={CN}>
            {isLoading && <Loading />}

            {!isLoading && !genreList.length && (
                <div>No genres founds</div>
            )}

            {
                !isLoading &&
                !!genreList.length
                && !!genreIds.length && genreIds.map( (item) => {
                    return (
                        <div className={`${CN}__nameContainer`}>
                            {
                                genreList.map( ({id: genreId, name}) => {
                                    if (item === genreId) {
                                        return (
                                            <div key={genreId} className={`${CN}__name`}>
                                                {name}
                                            </div>
                                        )
                                    }
                                } )
                            }
                        </div>
                    )
                }  )
            }
        </div>
    );
};
