import React from 'react';

import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";

import {FILMS, SEARCH} from "../../constants";

import "./LinkButton.scss"


const CN = "linkButton"
export const LinkButton = ({title, path}) => {
    return (
        <div className={CN}>
            <NavLink to={path === FILMS ? SEARCH : FILMS}>
                <Button variant="outlined">
                    {title}
                </Button>
            </NavLink>
        </div>
    );
};
