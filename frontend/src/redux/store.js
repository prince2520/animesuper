import {configureStore} from "@reduxjs/toolkit";

import helperReducer from './slice/helperSlice';
import overlayReducer from './slice/overlaySlice';
import myFavoriteReducer from './slice/myFavoriteSlice';
import myWatchlistReducer from './slice/myWatchlistSlice';

import AnimeReducer from './slice/animeSlice';
import MyProfileReducer from './slice/myProfileSlice';
import AlertBoxReducer from './slice/alertBoxSlice';


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