import {createSlice} from '@reduxjs/toolkit';
import {categoryType} from "../constants/constants";


const initialAnimeState = {
    animeRankData: {},
    mangaRankData: {},
    animeMangaCarouselData: {}
};

const AnimeSlice = createSlice({
    name: 'anime',
    initialState: initialAnimeState,
    reducers: {
        saveData(state, action) {
            if (action.payload.category === categoryType[0].toLowerCase()) {
                state.animeRankData[action.payload.slug] = action.payload.data;
            } else {
                state.mangaRankData[action.payload.slug] = action.payload.data;
            }
        },
        saveCarouselData(state, action) {
            let data = {
                category: action.payload.category,
                title: action.payload.title,
                synopsis: action.payload.synopsis,
                media_type: action.payload.media_type,
                average_episode_duration: action.payload.average_episode_duration,
                start_date: action.payload.start_date
            };


            state.animeMangaCarouselData[action.payload.id] = data;
        }
    }
});

export const AnimeActions = AnimeSlice.actions;
export default AnimeSlice.reducer;