import React from 'react';

import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import "./GoBackButton.scss"


const CN = "goBackButton"
export const GoBackButton = () => {
    const history = useHistory();

    return (
        <div onClick={() => history.goBack()} className={CN}>
            <Button variant="contained">
                Go Back
            </Button>
        </div>
    );
};
