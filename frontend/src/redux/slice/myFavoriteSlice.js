import {createSlice} from '@reduxjs/toolkit';
import { changeDataCategoryReducer, deleteFavoriteItemReducer, removeFavoriteItemReducer, saveMyFavoriteDataReducer } from '../reducer/myFavoriteReducer';

const initialMyFavoriteState = {
    removeCategory: 'none',
    removeCategoryId: 0,
    data: [],
    filterData: []
};

const MyFavoriteSlice = createSlice({
    name: 'myFavorite',
    initialState: initialMyFavoriteState,
    reducers: {
        removeFavoriteItemReducer,
        saveMyFavoriteDataReducer,
        deleteFavoriteItemReducer,
        changeDataCategoryReducer
    }
});

export const MyFavoriteActions = MyFavoriteSlice.actions;
export default MyFavoriteSlice.reducer;