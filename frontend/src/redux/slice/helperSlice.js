import {createSlice} from '@reduxjs/toolkit';
import { blurNavbarReducer, isSkipReducer, searchBarReducer, showMobileSideBarReducer } from '../reducer/helperReducer';

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
        isSkipReducer,
        searchBarReducer,
        blurNavbarReducer,
        showMobileSideBarReducer
    }
});

export const helperActions = helperSlice.actions;

export default helperSlice.reducer;