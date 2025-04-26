import { createSlice } from '@reduxjs/toolkit';
import { createFavoriteReducer, deleteFavoriteReducer, getFavoriteListReducer, selectedFavoriteReducer } from '../reducer/myFavoriteReducer';
import { createFavoriteThunk, deleteFavoriteThunk, getFavoriteListThunk } from '../thunk/myFavoriteThunk';

const initialMyFavoriteState = {
    favorite: {
        anime: [],
        manga: []
    },

    selectedCategory: "",
    selectedCategoryId: ""
};

const MyFavoriteSlice = createSlice({
    name: 'myFavorite',
    initialState: initialMyFavoriteState,
    reducers: {
        selectedFavoriteReducer
    },

    extraReducers: (builder) => {
        builder
            .addCase(getFavoriteListThunk.fulfilled, getFavoriteListReducer)

        builder
            .addCase(createFavoriteThunk.fulfilled, createFavoriteReducer)

        builder
            .addCase(deleteFavoriteThunk.fulfilled, deleteFavoriteReducer)


    }
});

export const MyFavoriteActions = MyFavoriteSlice.actions;
export default MyFavoriteSlice.reducer;