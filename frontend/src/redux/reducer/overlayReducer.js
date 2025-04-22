export const closeOverlayReducer = (state) => {
    state.showOverlay = false;
    state.showProfile = false;
    state.showLogout = false;
    state.showRemoveWatchlist = false;
    state.showRemoveFavorite = false;
    state.showEditWatchlist = false;
    state.showThankYouBox = false;
};

export const showProfileReducer = (state) => {
    state.showOverlay = true;
    state.showProfile = true;
};

export const showLogoutReducer= (state) => {
    state.showOverlay = true;
    state.showLogout = true;
};

export const showRemoveFavoriteReducer = (state, action) => {
    state.showOverlay = true;
    state.showRemoveFavorite = true;
};

export const showRemoveWatchlistReducer= (state) => {
    state.showOverlay = true;
    state.showRemoveWatchlist = true;
};

export const showEditWatchlistReducer = (state) => {
    state.showOverlay = true;
    state.showEditWatchlist = true;
};

export const showThankYouBoxReducer = (state) =>{
    state.showOverlay = true;
    state.showThankYouBox = true;
};