import React, {useContext} from 'react';

import {NavLink} from "react-router-dom"
import {IconButton} from "@material-ui/core"

import {FooterIconsContext, LinksContext} from "../../context";

import "./Footer.scss"

const CN = "footer"
export const Footer = () => {
    const footerLinks = useContext(LinksContext);
    const footerIcons = useContext(FooterIconsContext);
    return (
        <div className={CN}>
            <div className={`${CN}__container`}>
                <div className={`${CN}__links`}>
                    {!!footerLinks.length &&
                    footerLinks.map(({id, to, label}) => (
                        <div key={id}>
                            <h6>
                                <NavLink to={to} href="#">
                                    {label}
                                </NavLink>
                            </h6>
                        </div>
                    ))}
                </div>
                <div>
                    <hr className={`${CN}__lineOne`}/>
                </div>
                <div className={`${CN}__info`}>
                    <p>
                        Movie for Elite is a media service that allows you to enjoy on
                        your computer, tablet, or phone – and even your TV! With no
                        waiting, titles can be streamed immediately, or downloaded to
                        phones or tablets for offline enjoyment later. We have hundreds
                        of thousands of titles to choose from, with more being added
                        daily. Watch movies on Movie for Elite. Anytime. Anywhere.
                    </p>
                </div>
                <div className={`${CN}__icons`}>
                    {
                        !!footerIcons && footerIcons.map(({id, Icon}) => (
                            <IconButton key={id}>
                                {
                                    Icon
                                }
                            </IconButton>
                        ))
                    }
                </div>
                <div>
                    <hr className={`${CN}__lineTwo`}/>
                </div>
                <div className={`${CN}__copyright`}>
                    © 2021 Copyright:
                    <a href="#"> MovieForElite.com</a>
                </div>
            </div>
        </div>
    );
};
