import { createSlice } from '@reduxjs/toolkit';
import { saveCarouselDataReducer, saveAnimeMangaReducer } from '../reducer/animeMangaReducer';
import { getAnimeMangaDetailThunk, getCategoryListThunk } from '../thunk/animeMangaThunk';


const initialAnimeMangaState = {
    anime: {},
    manga: {},

    carousel: {
        anime: [],
        manga: []
    }
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
  
        builder
            .addCase(getCategoryListThunk.fulfilled, saveAnimeMangaReducer)
    }
});

export const AnimeMangaActions = AnimeMangaSlice.actions;
export default AnimeMangaSlice.reducer;