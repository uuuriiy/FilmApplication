import React from 'react';

import {Card} from "react-bootstrap";
import {StarRate} from '@material-ui/icons';

import "./FilmCard.scss"

const CN = 'filmCard'
export const FilmCard = ({id, film: { id: filmId, title, vote_average, overview, release_date, poster_path,}, onSelect}) => {

    const voteHandler = () => Number.isInteger(vote_average) ?
        vote_average : vote_average.toFixed(1)

    const onSelectHandler = () => {
        onSelect && onSelect(filmId)
    }

    return (
        <Card className={!!onSelect ? `${CN}` : `${CN}__recommendations` } onClick={onSelectHandler}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className={`${CN}__voteOptions`}>
                    <StarRate/>
                    <div className="pl-1">{voteHandler()}/10</div>
                </div>
                <Card.Text>{overview}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{release_date}</small>
            </Card.Footer>
        </Card>
    );
};
