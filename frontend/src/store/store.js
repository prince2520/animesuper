import {configureStore} from "@reduxjs/toolkit";

import helperReducer from './helper';
import overlayReducer from './overlay';
import myFavoriteReducer from './myFavorite';
import myWatchlistReducer from './myWatchlist';

import AnimeReducer from './anime';
import MyProfileReducer from './myProfile';
import AlertBoxReducer from './alertBox';


const store = configureStore({
    reducer: {
        helper: helperReducer,
        overlay: overlayReducer,
        myFavorite: myFavoriteReducer,
        myWatchlist: myWatchlistReducer,
        anime: AnimeReducer,
        myProfile: MyProfileReducer,
        alertBox: AlertBoxReducer
    }
});

export default store;