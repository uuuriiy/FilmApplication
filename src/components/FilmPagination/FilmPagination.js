import React, {useState} from 'react';
import Pagination from "react-bootstrap/Pagination";

import "./FilmPagination.scss"

const CN = "filmPagination"
export const FilmPagination = ({currentPage, pageCount, onPageClick, portionSize}) => {
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount/portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionNumber = (portionNumber-1) * portionSize+1;
    const rightPortionNumber = portionNumber * portionSize;

    const prevHandler = () => {
        setPortionNumber(portionNumber-1);
    };

    const nextHandler = () => {
        setPortionNumber(portionNumber+1);
    };
    return (
        <div className={`${CN}__container`}>
            <Pagination>
                {
                    portionNumber > 1 &&  <Pagination.Prev onClick={ (e)=>{
                        prevHandler();
                    } } />
                }
                {
                    pages
                        .filter( item => {
                            return  item >= leftPortionNumber && item <= rightPortionNumber
                        })
                        .map((item, index) => {
                            return (
                                <Pagination.Item
                                    className={`${CN}__item`}
                                    key={index}
                                    onClick={onPageClick(item)}
                                    active={item === currentPage}
                                >
                                    {item}
                                </Pagination.Item>
                            )
                        })
                }
                {
                    portionCount > portionNumber &&  <Pagination.Next onClick={(e)=>{
                        nextHandler();
                    }} />
                }
            </Pagination>
        </div>
    );
};
