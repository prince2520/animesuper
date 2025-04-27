import { createAsyncThunk } from "@reduxjs/toolkit";
import { createWatchlistAPI, deleteWatchlistAPI, getWatchlistAPI, updateWatchlistAPI } from "../api/watchlistAPI";
import { AlertBoxActions } from "../slice/alertBoxSlice";


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
    }, { dispatch, getState, rejectWithValue }) => {
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
            dispatch(AlertBoxActions.getAlertBoxReducer(response))
            return { ...response.data };
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getWatchlistThunk = createAsyncThunk(
    'myWatchlist/getWatchlist',
    async (_, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getWatchlistAPI(auth.token);
            return { ...response.data };
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


export const deleteWatchlistThunk = createAsyncThunk(
    'myWatchlist/deleteWatchlist',
    async ({ category, category_id }, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await deleteWatchlistAPI(category, category_id, auth.token);
            dispatch(AlertBoxActions.getAlertBoxReducer(response))
            return { ...response, category, category_id };
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");

        }
    }
);

export const updateWatchlistThunk = createAsyncThunk(
    'myWatchlist/updateWatchlist',
    async ({ category, category_id, status, progress_read_watched }, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await updateWatchlistAPI(category, category_id, status, progress_read_watched, auth.token);
            dispatch(AlertBoxActions.getAlertBoxReducer(response))
            return { ...response, status, progress_read_watched, category_id, category };
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);
