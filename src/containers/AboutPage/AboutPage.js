import React from 'react';

import {NavLink} from "react-router-dom"
import {Button} from "@material-ui/core";

import bgImg from "../../assets/img_for_site_BackGround.jpg"
import {Header} from "../../components/Header/Header";
import {CONTACT_US, jumbotronOptionLine} from "../../constants";

import "./AboutPage.scss"


const CN = "aboutPage"
export const AboutPage = () => {
    return (
        <>
            <Header/>
            <div className={CN} style={{backgroundImage: `url(${bgImg})`}}>
                <h1>
                    Welcome to Movie for Elite
                </h1>
                <h2>
                    {jumbotronOptionLine}
                </h2>
                <p>
                    Movie for Elite is a media service that allows you to enjoy on
                    your computer, tablet, or phone – and even your TV! With no
                    waiting, titles can be streamed immediately, or downloaded to
                    phones or tablets for offline enjoyment later. We have hundreds
                    of thousands of titles to choose from, with more being added
                    daily. Watch movies on Movie for Elite. Anytime. Anywhere.
                </p>
                <div className={`${CN}__contactLine`}>
                    If you have any problems on our site.
                    <br/>
                    Write to us.
                </div>
                <div className={`${CN}__buttonContainer`}>
                    <NavLink to={CONTACT_US}>
                        <Button variant="contained" color="primary">
                            Contact Us
                        </Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};
