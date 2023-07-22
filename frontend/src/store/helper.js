import {createSlice} from '@reduxjs/toolkit';

const initialHelperState = {
    skip: false,
    showSearchBar: true,
    blurNavbar: true,
    showMobileSideBar: false
};

const helperSlice = createSlice({
    name: 'helper',
    initialState: initialHelperState,
    reducers: {
        isSkipHandler(state, action) {
            state.skip = action.payload;
        },
        searchBarHandler(state, action) {
            state.showSearchBar = action.payload;
        },
        blurNavbarHandler(state, action) {
            state.blurNavbar = action.payload;
        },
        showMobileSideBarHandler(state, action){
            state.showMobileSideBar = action.payload
        }

    }
});

export const helperActions = helperSlice.actions;
export default helperSlice.reducer;