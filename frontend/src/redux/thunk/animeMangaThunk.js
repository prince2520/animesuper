import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthStatisticsAPI, getUserAPI, loginAPI } from "../api/authAPI";
import { getAnimeMangaDetailAPI, getCategoryListAPI } from "../api/animeMangaAPI";


// User - Get User
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


// Get animeManga 
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