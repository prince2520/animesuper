export const isSkipReducer = (state, action) => {
    state.skip = action.payload;
};

export const searchBarReducer = (state, action) => {
    state.showSearchBar = action.payload;
};

export const blurNavbarReducer = (state, action) =>{
    state.blurNavbar = action.payload;
};

export const showMobileSideBarReducer = (state, action) =>{
    state.showMobileSideBar = action.payload
}