import { initialOverlayState } from "../slice/overlaySlice";

export const closeOverlayReducer = (state) => {
    return { ...initialOverlayState };
};

export const showProfileReducer = (state) => {
    state.showOverlay = true;
    state.showProfile = true;
};

export const showLogoutReducer= (state) => {
    state.showOverlay = true;
    state.showLogout = true;
};

export const showDeleteFavoriteReducer = (state, action) => {
    state.showOverlay = true;
    state.showDeleteFavorite = true;
};

export const showDeleteWatchlistReducer= (state) => {
    state.showOverlay = true;
    state.showDeleteWatchlist = true;
};

export const showUpdateWatchlistReducer = (state) => {
    state.showOverlay = true;
    state.showUpdateWatchlist = true;
};

export const showThankYouBoxReducer = (state) =>{
    state.showOverlay = true;
    state.showThankYouBox = true;
};