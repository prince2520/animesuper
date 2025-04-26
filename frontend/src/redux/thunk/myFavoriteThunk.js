import { createAsyncThunk } from "@reduxjs/toolkit";
import { createFavoriteAPI, createFavoriteItemAPI, deleteFavoriteAPI, deleteFavoriteItemAPI, getFavoriteListAPI } from "../api/favoriteAPI";

export const createFavoriteThunk = createAsyncThunk(
    'myFavorite/createFavorite',
    async ({ 
        category_id,
        category,
        img_url,
        title,
        score,
        year,
        num_episode_chapter,
        media_type,
        }, { getState ,rejectWithValue }) => {
        try {
            const { auth } = getState();

            let response = await createFavoriteAPI( 
                category_id,
                category,
                img_url,
                title,
                score,
                year,
                num_episode_chapter,
                media_type, 
                auth.token);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getFavoriteListThunk = createAsyncThunk(
    'myFavorite/getFavoriteList',
    async (_, { getState ,rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getFavoriteListAPI(auth.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


export const deleteFavoriteThunk = createAsyncThunk(
    'myFavorite/deleteFavorite',
    async ({ category, category_id }, { getState ,rejectWithValue }) => {
        try {
            const { auth } = getState();
            await deleteFavoriteAPI(category, category_id, auth.token); 
            return {category, category_id};
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);