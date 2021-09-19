import React from 'react';

import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";

import {CheckoutFilm} from "../../components/CheckoutFilm/CheckoutFilm";
import {Header} from "../../components/Header/Header";
import {Jumbotron} from "../../components/Jumbotron/Jumbotron";

import {FILMS} from "../../constants";
import "./CheckoutPage.scss"


const CN = "checkoutPage"
export const CheckoutPage = () => {
    const {basket} = useSelector(state => state?.basket);
    return (
        <>
            <Header/>
            <Jumbotron/>
            <div className={CN}>
                {
                    !!basket?.length ? (
                        <div>
                            <h2 className={`${CN}__title`}>Your Film Basket</h2>
                            {
                                !!basket.length && basket.map(item => <CheckoutFilm item={item}/>)
                            }
                        </div>
                    ) : (
                        <div className={`${CN}__container`}>
                            <h2>Your Film Basket is empty</h2>
                            <p>
                                You have no items in your basket.
                                <br/>
                                Press this button to change this.
                            </p>
                            <NavLink to={FILMS}>
                                <Button variant="contained">
                                    Change
                                </Button>
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </>
    );
}
;
