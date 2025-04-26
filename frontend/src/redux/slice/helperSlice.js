import {createSlice} from '@reduxjs/toolkit';
import { blurNavbarReducer, searchBarReducer, showMobileSideBarReducer } from '../reducer/helperReducer';

const initialHelperState = {
    showSearchBar: true,
    blurNavbar: true,
    showMobileSideBar: false
};

const helperSlice = createSlice({
    name: 'helper',
    initialState: initialHelperState,
    reducers: {
        searchBarReducer,
        blurNavbarReducer,
        showMobileSideBarReducer
    }
});

export const helperActions = helperSlice.actions;

export default helperSlice.reducer;