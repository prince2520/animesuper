import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthAPI, getAuthStatisticsAPI, loginAPI, signUpAPI, updateAuthAPI } from "../api/authAPI";
import { AlertBoxActions } from "../slice/alertBoxSlice";


export const signupThunk = createAsyncThunk(
    'auth/signup',
    async ({ username , email, password, confirmPassword }, { dispatch, rejectWithValue }) => {
        try {
            let response = await signUpAPI(username, email, password, confirmPassword);
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

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { dispatch, rejectWithValue }) => {
        try {
            let response = await loginAPI(email, password);
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

export const getUserThunk = createAsyncThunk(
    'auth/getUser',
    async ({ token }, {dispatch, rejectWithValue }) => {
        try {
            let response = await getAuthAPI(token);
            return {...response.data, token};
        } catch (error) {
            dispatch(AlertBoxActions.getAlertBoxReducer({
                success: false,
                message: error.message || "Something goes wrong!"
            }))
            return rejectWithValue(error.message || "Something goes wrong!");
        }
    }
);

export const getAuthStatisticsThunk = createAsyncThunk(
    'auth/getAuthStatistics',
    async (_, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await getAuthStatisticsAPI(auth.token);
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


export const updatedAuthThunk = createAsyncThunk(
    'auth/updatedAuth',
    async ({username, gender, location, profile_photo, favorite_genre}, { dispatch, getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            let response = await updateAuthAPI(username, gender, location, profile_photo, favorite_genre, auth.token);
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
