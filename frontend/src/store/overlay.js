import {createSlice} from '@reduxjs/toolkit';

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
        closeOverlayHandler(state) {
            state.showOverlay = false;
            state.showProfile = false;
            state.showLogout = false;
            state.showRemoveWatchlist = false;
            state.showRemoveFavorite = false;
            state.showEditWatchlist = false;
            state.showThankYouBox = false;
        },
        showProfileHandler(state) {
            state.showOverlay = true;
            state.showProfile = true;
        },
        showLogoutHandler(state) {
            state.showOverlay = true;
            state.showLogout = true;
        },
        showRemoveFavoriteHandler(state, action) {
            state.showOverlay = true;
            state.showRemoveFavorite = true;
        },
        showRemoveWatchlistHandler(state) {
            state.showOverlay = true;
            state.showRemoveWatchlist = true;
        },
        showEditWatchlistHandler(state) {
            state.showOverlay = true;
            state.showEditWatchlist = true;
        },
        showThankYouBoxHandler(state) {
            state.showOverlay = true;
            state.showThankYouBox = true;
        }
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;