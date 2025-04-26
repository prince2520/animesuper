import { createSlice } from '@reduxjs/toolkit';
import { resetAuth, saveAuthReducer, saveAuthSatisticsReducer, updateIsAuthReducer } from '../reducer/authReducer';
import { getAuthStatisticsThunk, getUserThunk, loginThunk, updatedAuthThunk } from '../thunk/authThunk';

export const initialAuthState = {
    email: "",
    username: '',
    profile_photo: '',
    gender: '',
    location: '',
    token: null,
    favorite_genre: [],
    isAuth: false,

    // profile stats
    stats: {
        anime: [],
        manga: []
    }
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        resetAuth,
        saveAuthReducer,
        saveAuthSatisticsReducer,
        updateIsAuthReducer
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, saveAuthReducer)

        builder
            .addCase(getUserThunk.fulfilled, saveAuthReducer)

        builder
            .addCase(getAuthStatisticsThunk.fulfilled, saveAuthSatisticsReducer)

        builder
            .addCase(updatedAuthThunk.fulfilled, saveAuthReducer)

    }
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;