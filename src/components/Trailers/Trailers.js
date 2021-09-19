import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

import {getVideos} from "../../actions/videos.action";

import {opts} from "../../constants";

import {Loading} from "../Loading/Loading";
import "./Trailers.scss"


const CN = "trailers"
export const Trailers = ({id, filmName}) => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const dispatch = useDispatch();
    const {videosList, isLoading} = useSelector(state => state?.videos);

    useEffect(() => {
        loadVideos()
    }, []);

    const loadVideos = () => {
        dispatch(getVideos(id))
    }

    const handleClick = (url) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(filmName || "").then(() => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            });
        }
    };

    return (
        <div className={CN}>
            {isLoading && <Loading />}

            {!isLoading && !videosList.length && (
                <div> No video founds </div>
            )}

            {!isLoading && !!videosList.length && (
                <div className={`${CN}__container`}>
                    {
                        videosList.map( ({id: videoId, type, name, key}) => {
                            if (type === 'Trailer') {
                                return (
                                    <div className={`${CN}__buttonContainer`}>
                                        <Button
                                            className={`${CN}__button`}
                                            onClick={() => handleClick(`https://www.youtube.com/watch?v=${key}`)}
                                            key={videoId}
                                            variant="contained"
                                        >
                                            {name}
                                        </Button>
                                    </div>
                                )
                            }
                        } )
                    }
                    {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
                </div>
            )}
        </div>
    );
}
