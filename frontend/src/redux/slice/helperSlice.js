import {createSlice} from '@reduxjs/toolkit';
import { blurNavbarReducer, resetHelperReducer, searchBarReducer, showMobileSideBarReducer } from '../reducer/helperReducer';


export const initialHelperState = {
    showSearchBar: true,
    blurNavbar: true,
    showMobileSideBar: false
};

const helperSlice = createSlice({
    name: 'helper',
    initialState: initialHelperState,
    reducers: {
        resetHelperReducer,
        searchBarReducer,
        blurNavbarReducer,
        showMobileSideBarReducer
    }
});

export const helperActions = helperSlice.actions;

export default helperSlice.reducer;