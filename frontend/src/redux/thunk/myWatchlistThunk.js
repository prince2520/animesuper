import { createAsyncThunk } from "@reduxjs/toolkit";
import { createWatchlistAPI, createWatchlistItemAPI, deleteWatchlistAPI, deleteWatchlistItemAPI, getWatchlistAPI, updateWatchlistAPI } from "../api/watchlistAPI";


// User - Get User
export const createWatchlistThunk = createAsyncThunk(
    'myWatchlist/createWatchlist',
    async ({
        category,
        category_id,
        img_url,
        title,
        num_episode_or_chapter,
        media_type,
    }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();

            let response = await createWatchlistAPI(
                category,
                category_id,
                img_url,
                title,
                num_episode_or_chapter,
                media_type,
                auth.token
            );

            return { ...response.data };
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getWatchlistThunk = createAsyncThunk(
    'myWatchlist/getWatchlist',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getWatchlistAPI(auth.token);
            return { ...response.data };
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


export const deleteWatchlistThunk = createAsyncThunk(
    'myWatchlist/deleteWatchlist',
    async ({ category, category_id }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await deleteWatchlistAPI(category, category_id, auth.token);
            return { ...response, category, category_id };
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const updateWatchlistThunk = createAsyncThunk(
    'myWatchlist/updateWatchlist',
    async ({ category, category_id, status, progress_read_watched }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await updateWatchlistAPI(category, category_id, status, progress_read_watched, auth.token);
            return { ...response, status, progress_read_watched, category_id, category };
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);
