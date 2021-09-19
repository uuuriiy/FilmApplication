import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {ChatBubble} from '@material-ui/icons';
import {useHistory, useLocation} from "react-router-dom"

import {getReviewsMovies} from "../../actions/reviews.action";

import {Loading} from "../Loading/Loading";
import {Review} from "../Review/Review";

import "./ReviewsList.scss"
import queryString from "query-string";
import {FilmPagination} from "../FilmPagination/FilmPagination";


const CN = "reviews"
export const ReviewsList = ({id, portionSize = 10}) => {
    const history = useHistory();
    const {search} = useLocation();
    const dispatch = useDispatch();
    const {reviewsList, isLoading, page, totalPages} = useSelector(state => state?.reviews);

    useEffect(() => {
        const params = queryString.parse(search);

        const { page: pageFromUrl } = params;

        const pageNum = pageFromUrl ? pageFromUrl : page;

        loadReviews(id, pageNum)
    }, []);

    const loadReviews = (id, page) => {
        dispatch(getReviewsMovies(id, page))
    }

    const updateUrl = (page) => {
        // апдейт урлы в адресной строке, меняем query search
        const newParams = {
            page
        };
        history.replace({ search: queryString.stringify(newParams) });
    };

    const setPage = (pageNum) => {

        return () => {
            loadReviews(id,pageNum);
            updateUrl(pageNum);
        };
    };

    return (
        <div className={CN}>
            {
                !!reviewsList.length && (
                    <div className={`${CN}__container`}>
                        <div className={`${CN}__icon`}>
                            <ChatBubble fontSize="large"/>
                        </div>
                        <div className={`${CN}__mainInfo`}>
                            <h3>
                                Reviews
                            </h3>
                            <hr/>
                            <div>
                                {isLoading && <Loading/>}

                                {!isLoading && !reviewsList.length && (
                                    <div> No reviews founds </div>
                                )}

                                {!isLoading && !!reviewsList.length && reviewsList.map(review => (
                                    <Review key={review.id} review={review}/>
                                ))
                                }
                                {
                                    totalPages > 1 && (
                                        <FilmPagination
                                            currentPage={page}
                                            pageCount={totalPages}
                                            portionSize={portionSize}
                                            onPageClick={setPage}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
