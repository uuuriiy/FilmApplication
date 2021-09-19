import React from 'react';

import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import backgroundImage from '../../assets/img_for_site_BackGround.jpg'
import "./Landing.scss"
import {SIGN_IN} from "../../constants";

const CN = 'landing'
export const Landing = (props) => {
    return (
        <div
            className={CN}
            style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className={`${CN}__textContainer`}>
                <h2>
                    Watch amazing movies and TV shows for free. No subscription fees, and no credit cards.
                    Just thousands of hours of streaming video content from studios like Paramount, Lionsgate, MGM and more.
                </h2>
                <h3>
                    With content from over 200 partners.
                </h3>
            </div>
            <div className={`${CN}__buttonContainer`}>
                <NavLink to={SIGN_IN}>
                    <Button className={`${CN}__button`} variant="contained" color="primary">Sign In With Us</Button>
                </NavLink>
            </div>
        </div>
    )
};


