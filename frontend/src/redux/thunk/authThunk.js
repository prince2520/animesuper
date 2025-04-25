import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthStatisticsAPI, getUserAPI, loginAPI } from "../api/authAPI";


// User - Get User
export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            let response = await loginAPI(email, password);
            return response;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getUserThunk = createAsyncThunk(
    'auth/getUser',
    async ({ token }, { rejectWithValue }) => {
        try {
            let response = await getUserAPI(token);
            return {...response, token};
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getAuthStatisticsThunk = createAsyncThunk(
    'auth/getAuthStatistics',
    async ({ }, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getAuthStatisticsAPI(auth.token);
            return response;
        } catch (error) {
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);
