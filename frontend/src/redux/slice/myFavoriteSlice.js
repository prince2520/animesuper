import { createSlice } from '@reduxjs/toolkit';
import { createFavoriteReducer, deleteFavoriteReducer, getFavoriteListReducer, resetFavoriteReducer, selectedFavoriteReducer } from '../reducer/myFavoriteReducer';
import { createFavoriteThunk, deleteFavoriteThunk, getFavoriteListThunk } from '../thunk/myFavoriteThunk';

export const initialMyFavoriteState = {
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
        selectedFavoriteReducer,
        resetFavoriteReducer
    },

    extraReducers: (builder) => {
        builder
            .addCase(getFavoriteListThunk.fulfilled, getFavoriteListReducer)
            .addCase(getFavoriteListThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

        builder
            .addCase(createFavoriteThunk.fulfilled, createFavoriteReducer)
            .addCase(createFavoriteThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

        builder
            .addCase(deleteFavoriteThunk.fulfilled, deleteFavoriteReducer)
            .addCase(deleteFavoriteThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })
    }
});

export const MyFavoriteActions = MyFavoriteSlice.actions;
export default MyFavoriteSlice.reducer;