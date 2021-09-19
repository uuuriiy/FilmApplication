import React from 'react';

import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";

import {addToBasket} from "../../actions/basket.action";

import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";
import {Genres} from "../Genres/Genres";
import {GoBackButton} from "../GoBackButton/GoBackButton";
import {RecommendationsList} from "../RecommendationsList/RecommendationsList";
import {ReviewsList} from "../ReviewsList/ReviewsList";
import {Trailers} from "../Trailers/Trailers";

import "./FilmDetails.scss"


const CN = "filmDetails"
export const FilmDetails = ({id, film: {title, backdrop_path, overview, genre_ids}}) => {
    const dispatch = useDispatch();

    const addToBasketItem = () => {
        dispatch(addToBasket({
            id,
            image: backdrop_path,
            title,
            overview
        }))
    }

    return (
        <div className={CN}>
            <div className={`${CN}__container`}>
                <div>
                    <img className={`${CN}__img`} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}/>
                </div>
                <div>
                    <div className={`${CN}__info`}>
                        <h2>
                            {title}
                        </h2>
                        <div>
                            <ErrorBoundary>
                                <Genres genreIds={genre_ids}/>
                            </ErrorBoundary>
                        </div>
                        <p>
                            {overview}
                        </p>
                    </div>
                    <ErrorBoundary>
                        <Trailers filmName={title} id={id}/>
                    </ErrorBoundary>
                    <div className={`${CN}__buttonContainer`}>
                        <Button onClick={addToBasketItem} variant="contained">
                            Add To Basket
                        </Button>
                    </div>
                </div>
            </div>
            <ErrorBoundary>
                <RecommendationsList id={id}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <GoBackButton />
            </ErrorBoundary>
            <ErrorBoundary>
                <ReviewsList id={id}/>
            </ErrorBoundary>
        </div>
    );
};
