import {createSlice} from '@reduxjs/toolkit';
import { closeOverlayReducer, resetOverlayReducer, showDeleteFavoriteReducer, showDeleteWatchlistReducer, showLogoutReducer, showProfileReducer, showThankYouBoxReducer, showUpdateWatchlistReducer } from '../reducer/overlayReducer';

export const initialOverlayState = {
    showOverlay: false,
    
    showLogout: false,
    showProfile: false,
    showDeleteFavorite: false,
    showDeleteWatchlist: false,
    showUpdateWatchlist: false,
    showThankYouBox: false
};

const OverlaySlice = createSlice({
    name: 'overlay',
    initialState: initialOverlayState,
    reducers: {
        resetOverlayReducer,
        closeOverlayReducer,
        showProfileReducer,
        showLogoutReducer,
        showDeleteFavoriteReducer,
        showDeleteWatchlistReducer,
        showUpdateWatchlistReducer,
        showThankYouBoxReducer
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;