import React, {useContext, useState} from 'react';

import Carousel from "react-bootstrap/Carousel";

import {CarouselContext} from "../../context";

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./ControlledCarousel.scss"


export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const carouselInfo = useContext(CarouselContext);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    !!carouselInfo && carouselInfo.map( ({id, img, h3, p}) => (
                        <Carousel.Item key={id}>
                            <img
                                className="d-block w-100 height"
                                src={img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{h3}</h3>
                                <p>{p}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ) )
                }
            </Carousel>
    );
};
