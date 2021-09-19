import React from 'react';

import {LinkButton} from "../LinkButton/LinkButton";
import {FILMS, SEARCH} from "../../constants";

import "./JumbotronInfo.scss"

const CN = "jumbotronInfo"
export const JumbotronInfo = ({h1, h2, path}) => {

    return (
        <>
            <div className={`${CN}__container`}>
                <h1 className={`${CN}__optionLineOne`}>
                    {h1}
                </h1>
                <h2 className={`${CN}__optionLineTwo`}>
                    {h2}
                </h2>
                {
                    path === FILMS && (
                        <LinkButton title='Search Films' path={path} />
                    )
                }
            </div>
        </>
    );
}
