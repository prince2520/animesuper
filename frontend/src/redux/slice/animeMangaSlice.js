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
            .addCase(getAnimeMangaDetailThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

        builder
            .addCase(getCategoryListThunk.fulfilled, saveAnimeMangaReducer)
            .addCase(getCategoryListThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })
    }
});

export const AnimeMangaActions = AnimeMangaSlice.actions;
export default AnimeMangaSlice.reducer;