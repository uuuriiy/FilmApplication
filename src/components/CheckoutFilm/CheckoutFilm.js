import React from 'react';

import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import {removeFromBasket} from "../../actions/basket.action";

import "./CheckoutFilm.scss"

const CN = "checkoutFilm"
export const CheckoutFilm = ({item: {id, image, title, overview}}) => {
    const dispatch = useDispatch();

    const removeFromBasketItem = () => {
        dispatch(removeFromBasket(id))
    }
    return (
        <div className={CN}>
            <img className={`${CN}__image`} src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title}/>
            <div className={`${CN}__info`}>
                <h2>{title}</h2>
                <div className={`${CN}__overview`}>
                    {overview}
                </div>
                <div className={`${CN}__buttonContainer`}>
                    <Button variant="contained" onClick={removeFromBasketItem}> Remove from Basket </Button>
                </div>
            </div>
        </div>
    );
};
