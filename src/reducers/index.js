import {combineReducers} from "redux";

import {basketReducer} from "./basket.reducer";
import {filmsReducer} from "./films.reducer";
import {filmsSearchReducer} from "./filmsSearch.reducer";
import {genresReducer} from "./genres.reducer";
import {recommendationsReducer} from "./recommendations.reducer";
import {reviewsReducer} from "./reviews.reducer";
import {userCreateReducer} from "./userCreate.reducer";
import {videosReducer} from "./videos.reducer";

export default () => {
    return combineReducers({
        basket: basketReducer,
        films: filmsReducer,
        filmsSearch: filmsSearchReducer,
        genres: genresReducer,
        recommendations: recommendationsReducer,
        reviews: reviewsReducer,
        userCreate: userCreateReducer,
        videos: videosReducer
    })
}
