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
        closeOverlayReducer(state) {
            state.showOverlay = false;
            state.showProfile = false;
            state.showLogout = false;
            state.showRemoveWatchlist = false;
            state.showRemoveFavorite = false;
            state.showEditWatchlist = false;
            state.showThankYouBox = false;
        },
        showProfileReducer(state) {
            state.showOverlay = true;
            state.showProfile = true;
        },
        showLogoutReducer(state) {
            state.showOverlay = true;
            state.showLogout = true;
        },
        showRemoveFavoriteReducer(state, action) {
            state.showOverlay = true;
            state.showRemoveFavorite = true;
        },
        showRemoveWatchlistReducer(state) {
            state.showOverlay = true;
            state.showRemoveWatchlist = true;
        },
        showEditWatchlistReducer(state) {
            state.showOverlay = true;
            state.showEditWatchlist = true;
        },
        showThankYouBoxReducer(state) {
            state.showOverlay = true;
            state.showThankYouBox = true;
        }
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;