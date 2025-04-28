import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAnimeMangaDetailAPI, getCategoryListAPI } from "../api/animeMangaAPI";
import { AlertBoxActions } from "../slice/alertBoxSlice";

//  Thunk -  fetch a ranked category list (anime/manga) from the API.
export const getCategoryListThunk = createAsyncThunk(
    'animeManga/getCategoryList',
    async ({
        category,
        rank_type,
        limit,
        offset }, { dispatch, rejectWithValue }) => {
        try {
            let response = await getCategoryListAPI(
                category,
                rank_type,
                limit,
                offset = 0);
            return { data: response.data.data, category, slug: rank_type };
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


//  Thunk - fetch a (anime/manga) detail from the API.
export const getAnimeMangaDetailThunk = createAsyncThunk(
    'animeManga/getAnimeMangaDetail',
    async ({ category, id }, { dispatch, rejectWithValue }) => {
        try {
            let response = await getAnimeMangaDetailAPI(category, id);
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