import { createAsyncThunk } from "@reduxjs/toolkit";
import { createFavoriteAPI, deleteFavoriteAPI, getFavoriteListAPI } from "../api/favoriteAPI";
import { AlertBoxActions } from "../slice/alertBoxSlice";

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
    }, { dispatch, getState, rejectWithValue }) => {
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
            dispatch(AlertBoxActions.getAlertBoxReducer(response))
            return response.data;
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getFavoriteListThunk = createAsyncThunk(
    'myFavorite/getFavoriteList',
    async (_, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getFavoriteListAPI(auth.token);
            return response.data;
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


export const deleteFavoriteThunk = createAsyncThunk(
    'myFavorite/deleteFavorite',
    async ({ category, category_id }, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const response = await deleteFavoriteAPI(category, category_id, auth.token);
            dispatch(AlertBoxActions.getAlertBoxReducer(response))
            return { category, category_id };
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);