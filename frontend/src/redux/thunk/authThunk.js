import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthAPI, getAuthStatisticsAPI, getUserAPI, loginAPI, updateAuthAPI } from "../api/authAPI";


// User - Get User
export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            let response = await loginAPI(email, password);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getUserThunk = createAsyncThunk(
    'auth/getUser',
    async ({ token }, { rejectWithValue }) => {
        try {
            let response = await getAuthAPI(token);
            return {...response.data, token};
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getAuthStatisticsThunk = createAsyncThunk(
    'auth/getAuthStatistics',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getAuthStatisticsAPI(auth.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);


export const updatedAuthThunk = createAsyncThunk(
    'auth/updatedAuth',
    async ({username, gender, location, profile_photo, favorite_genre}, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await updateAuthAPI(username, gender, location, profile_photo, favorite_genre, auth.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);
