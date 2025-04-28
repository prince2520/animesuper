import {configureStore} from "@reduxjs/toolkit";

import helperReducer from './slice/helperSlice';
import overlayReducer from './slice/overlaySlice';
import myFavoriteReducer from './slice/myFavoriteSlice';
import myWatchlistReducer from './slice/myWatchlistSlice';

import AnimeMangoReducer from './slice/animeMangaSlice';
import AuthReducer from './slice/authSlice';
import AlertBoxReducer from './slice/alertBoxSlice';


const store = configureStore({
    reducer: {
        // Auth User
        auth: AuthReducer,
        myFavorite: myFavoriteReducer,
        myWatchlist: myWatchlistReducer,

        // For All User
        animeManga: AnimeMangoReducer,

        // Helper Reducer
        helper: helperReducer,
        overlay: overlayReducer,
        alertBox: AlertBoxReducer
    }
});

export default store;