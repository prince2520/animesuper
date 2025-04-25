import { createSlice } from '@reduxjs/toolkit';
import { saveCarouselDataReducer, saveAnimeMangaReducer } from '../reducer/animeMangaReducer';
import { getAnimeMangaDetailThunk, getCategoryListThunk } from '../thunk/animeMangaThunk';


const initialAnimeMangaState = {
    animeRankData: {},
    mangaRankData: {},

    animeMangaCarouselData: {}
};

const AnimeMangaSlice = createSlice({
    name: 'animeManga',
    initialState: initialAnimeMangaState,
    reducers: {
        saveAnimeMangaReducer,
        saveCarouselDataReducer
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnimeMangaDetailThunk.fulfilled, saveCarouselDataReducer)
            .addCase(getAnimeMangaDetailThunk.rejected, (state, action) => {
                console.log(action.payload);
            })
        builder
            .addCase(getCategoryListThunk.fulfilled, saveAnimeMangaReducer)
            .addCase(getCategoryListThunk.rejected, (state, action) => {
                console.log(action.payload);
            });
    }
});

export const AnimeMangaActions = AnimeMangaSlice.actions;
export default AnimeMangaSlice.reducer;