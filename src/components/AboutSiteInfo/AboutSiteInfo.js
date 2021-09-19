import React from 'react';

import bgImage from "../../assets/aboutSiteBgImg.jpg"
import {LinkButton} from "../LinkButton/LinkButton";

import "./AboutSiteInfo.scss"


const CN = "aboutSiteInfo"
export const AboutSiteInfo = () => {
    return (
        <div className={CN} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={`${CN}__title`}>
                <h2>
                    Thousands of titles
                </h2>
            </div>
            <div className={`${CN}__mainInfo`}>
                <div className={`${CN}__mainInfoHeader`}>
                    Watch amazing movies and TV shows for free. No subscription fees, and no credit cards.
                    Just thousands of hours of streaming video content from studios like Paramount, Lionsgate, MGM and
                    more.
                </div>
                <div className={`${CN}__mainInfoFooter`}>
                    With content from over 200 partners.
                </div>
            </div>
            <LinkButton title="Browse Titles"/>
            <div className={`${CN}__bg-helpful-img`}>
            </div>
        </div>
    );
};
