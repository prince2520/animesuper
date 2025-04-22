import {createSlice} from '@reduxjs/toolkit';
import { closeOverlayReducer, showEditWatchlistReducer, showLogoutReducer, showProfileReducer, showRemoveFavoriteReducer, showRemoveWatchlistReducer, showThankYouBoxReducer } from '../reducer/overlayReducer';

const initialOverlayState = {
    showOverlay: false,
    showProfile: false,
    showLogout: false,
    showRemoveFavorite: false,
    showRemoveWatchlist: false,
    showEditWatchlist: false,
    showThankYouBox: false
};

const OverlaySlice = createSlice({
    name: 'overlay',
    initialState: initialOverlayState,
    reducers: {
        closeOverlayReducer,
        showProfileReducer,
        showLogoutReducer,
        showRemoveFavoriteReducer,
        showRemoveWatchlistReducer,
        showEditWatchlistReducer,
        showThankYouBoxReducer
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;