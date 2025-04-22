import {createSlice} from '@reduxjs/toolkit';
import { saveCarouselDataReducer, saveDataReducer } from '../reducer/animeReducer';


const initialAnimeState = {
    animeRankData: {},
    mangaRankData: {},
    animeMangaCarouselData: {}
};

const AnimeSlice = createSlice({
    name: 'anime',
    initialState: initialAnimeState,
    reducers: {
        saveDataReducer,
        saveCarouselDataReducer
    }
});

export const AnimeActions = AnimeSlice.actions;
export default AnimeSlice.reducer;