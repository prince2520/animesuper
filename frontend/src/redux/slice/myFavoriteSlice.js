import { createSlice } from '@reduxjs/toolkit';
import { createFavoriteReducer, deleteFavoriteReducer, getFavoriteListReducer, saveDeleteFavoriteReducer } from '../reducer/myFavoriteReducer';
import { createFavoriteThunk, deleteFavoriteThunk, getFavoriteListThunk } from '../thunk/myFavoriteThunk';

const initialMyFavoriteState = {
    favorite: {
        anime: [],
        manga: []
    },

    deleteFavoriteCategory: "",
    deleteFavoriteCategoryId: ""
};

const MyFavoriteSlice = createSlice({
    name: 'myFavorite',
    initialState: initialMyFavoriteState,
    reducers: {
        saveDeleteFavoriteReducer
    },

    extraReducers: (builder) => {
        builder
            .addCase(getFavoriteListThunk.fulfilled, getFavoriteListReducer)
            .addCase(getFavoriteListThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

        builder
            .addCase(createFavoriteThunk.fulfilled, createFavoriteReducer)
            .addCase(createFavoriteThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

        builder
            .addCase(deleteFavoriteThunk.fulfilled, deleteFavoriteReducer)
            .addCase(deleteFavoriteThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

    }
});

export const MyFavoriteActions = MyFavoriteSlice.actions;
export default MyFavoriteSlice.reducer;