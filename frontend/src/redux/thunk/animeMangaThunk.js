import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAnimeMangaDetailAPI, getCategoryListAPI } from "../api/animeMangaAPI";


export const getCategoryListThunk = createAsyncThunk(
    'animeManga/getCategoryList',
    async ({ 
        category,
        rank_type,
        limit,
        offset }, { rejectWithValue }) => {
        try {
            let response = await getCategoryListAPI(
                category,
                rank_type,
                limit,
                offset = 0);
  
            return {data: {...response.data}, category, slug: rank_type};
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


export const getAnimeMangaDetailThunk = createAsyncThunk(
    'animeManga/getAnimeMangaDetail',
    async ({category, id }, { rejectWithValue }) => {
        try {
            let response = await getAnimeMangaDetailAPI(category, id);
            return response;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);