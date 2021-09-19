import React from 'react';

import JumbotronImage from "../../assets/jumbotron_image.jpg"
import {JumbotronInfo} from "../JumbotronInfo/JumbotronInfo";
import {FILMS, HOME, jumbotronOptionLine, SEARCH} from "../../constants";

import "./Jumbotron.scss"

const CN = "jumbotron"
export const Jumbotron = ({path}) => {

    const renderJumbotron = () => {
        switch (path) {
            case HOME:
                return (
                    <JumbotronInfo
                        h1='Welcome to Movie for Elite'
                        h2={jumbotronOptionLine}
                        path={path}
                    />
                )
            case FILMS:
                return (
                    <JumbotronInfo
                        h1='Search movies on Movie for Elite'
                        h2={jumbotronOptionLine}
                        path={path}
                    />
                )
            case SEARCH:
                return (
                    <JumbotronInfo
                        h1='Find all movies that you want'
                        h2={jumbotronOptionLine}
                        path={path}
                    />
                )
            default:
                return (
                    <JumbotronInfo />
                )
        }
    }

    return (
        <div className={CN} style={{backgroundImage: `url(${JumbotronImage})`}}>
            {
                renderJumbotron()
            }
        </div>
    );
};
