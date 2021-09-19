import React, {useContext} from 'react';

import {NavLink} from 'react-router-dom'
import {useSelector} from "react-redux";
import {ShoppingBasket} from "@material-ui/icons"

import logo from "../../assets/logo.png"
import {LinksContext} from "../../context";
import {CHECKOUT, SIGN_IN} from "../../constants";
import {signOut} from "../../firebase/firebase";
import './Header.scss'

const CN = 'header'
export const Header = () => {
    const headerLinks = useContext(LinksContext);
    const user = useSelector(state => state?.userCreate?.user);
    const {basket} = useSelector(state => state?.basket);

    const logout = () => {
        if (user) {
            signOut();
        }
    };
    return (
        <div className={CN}>
            <div>
                <img className={`${CN}__logo`} src={logo} alt="logo"/>
            </div>
            <ul>
                {
                    !!headerLinks.length &&
                    headerLinks.map(({id, to, label}) => (
                        <li key={id}>
                            <NavLink to={to}>
                                {label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <div className={`${CN}__optionContainer`}>
                <NavLink to={!user && `${SIGN_IN}`} className={`${CN}__link`}>
                    <div onClick={logout} className={`${CN}__option`}>
                    <span className={`${CN}__optionLineOne`}>
                        Hello {user?.displayName}
                    </span>
                        <span className={`${CN}__optionLineTwo`}>
                        {user ? "Sign Out" : "Sign In"}
                    </span>
                    </div>
                </NavLink>
                <NavLink to={CHECKOUT} className={`${CN}__link`}>
                    <div className={`${CN}__optionBasket`}>
                        <ShoppingBasket/>
                        <span className={`${CN}__basketCount`}>
                            {basket.length}
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};
