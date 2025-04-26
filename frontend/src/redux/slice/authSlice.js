import { createSlice } from '@reduxjs/toolkit';
import { saveAuthReducer, saveAuthSatisticsReducer, updateIsAuthReducer } from '../reducer/authReducer';
import { getAuthStatisticsThunk, getUserThunk, loginThunk, updatedAuthThunk } from '../thunk/authThunk';

const initialAuthState = {
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
        saveAuthReducer,
        saveAuthSatisticsReducer,
        updateIsAuthReducer
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, saveAuthReducer)
            .addCase(loginThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

        builder
            .addCase(getUserThunk.fulfilled, saveAuthReducer)
            .addCase(getUserThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

        builder
            .addCase(getAuthStatisticsThunk.fulfilled, saveAuthSatisticsReducer)
            .addCase(getAuthStatisticsThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

        builder
            .addCase(updatedAuthThunk.fulfilled, saveAuthReducer)
            .addCase(updatedAuthThunk.rejected, (state, action) => {
                console.log(action.payload);
            })

    }
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;