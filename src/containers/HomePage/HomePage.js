import React from 'react';

import {AboutSiteInfo} from "../../components/AboutSiteInfo/AboutSiteInfo";
import {ControlledCarousel} from "../../components/ControlledCarousel/ControlledCarousel";
import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";

export const HomePage = ({match: {path}}) => {
    return (
        <>
            <Header/>
            <Jumbotron path={path}/>
            <AboutSiteInfo/>
            <ControlledCarousel/>
            <Footer/>
        </>
    );
};
