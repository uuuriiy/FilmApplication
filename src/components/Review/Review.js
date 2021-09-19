import React from 'react';

import {Avatar} from "@material-ui/core";

import "./Review.scss"


const CN = "review"
export const Review = ({review: {author, author_details: {avatar_path}, content}}) => {

    const avatarHandler = () => {
        if (avatar_path) return avatar_path.slice(1,avatar_path.length-1);
    }

    return (
        <div className={CN}>
            <div className={`${CN}__titleContainer`}>
                    <Avatar className={`${CN}__titleImg`} src={avatarHandler()}/>
                    <div className={`${CN}__titleUserInfo`}>
                            {author}
                    </div>
            </div>
            <div className={`${CN}__mainInfoContainer`}>
                <div className={`${CN}__mainInfoTitle`}>
                    Review:
                </div>
                <div  className={`${CN}__mainInfo`}>
                    {content}
                </div>
            </div>
            <hr/>
        </div>
    );
};
