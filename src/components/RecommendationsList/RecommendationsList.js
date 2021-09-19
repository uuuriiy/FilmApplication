import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";

import {getRecommendations} from "../../actions/recommendations.action";

import {sliderSettings} from "../../constants";

import {FilmCard} from "../FilmCard/FilmCard";
import {Loading} from "../Loading/Loading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommendationsList.scss"
import queryString from "query-string";


const CN = "recommendationsList"
export const RecommendationsList = ({id}) => {
    const dispatch = useDispatch();
    const {recommendationsList, isLoading} = useSelector(state => state?.recommendations);

    useEffect(() => {
        loadRecommendations()
    }, []);

    const loadRecommendations = () => {
        dispatch(getRecommendations(id))
    }

    return (
        <div className={CN}>
            {
                !!recommendationsList.length && (
                    <div>
                        <h2 className={`${CN}__text`}>
                            Recommendations
                        </h2>
                        <div className={`${CN}__container`}>
                            {isLoading && <Loading />}

                            {!isLoading && !recommendationsList.length && (
                                <div> No recommendations founds </div>
                            )}

                            {!isLoading && !!recommendationsList.length && (
                                <div>
                                    <Slider {...sliderSettings}>
                                        {
                                            recommendationsList.map( film => (
                                                <FilmCard
                                                    key={film.id}
                                                    id={film.id}
                                                    film={film}
                                                />
                                            ) )
                                        }
                                    </Slider>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    );
};
