import { createSlice } from '@reduxjs/toolkit';
import { resetAuth, saveAuthReducer, saveAuthSatisticsReducer, updateIsAuthReducer } from '../reducer/authReducer';
import { getAuthStatisticsThunk, getUserThunk, loginThunk, signupThunk, updatedAuthThunk } from '../thunk/authThunk';

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
            .addCase(loginThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })
        builder
            .addCase(signupThunk.fulfilled, saveAuthReducer)
            .addCase(signupThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

        builder
            .addCase(getUserThunk.fulfilled, saveAuthReducer)
            .addCase(getUserThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

        builder
            .addCase(getAuthStatisticsThunk.fulfilled, saveAuthSatisticsReducer)
            .addCase(getAuthStatisticsThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

        builder
            .addCase(updatedAuthThunk.fulfilled, saveAuthReducer)
            .addCase(updatedAuthThunk.rejected, (_, actions) => {
                console.error(actions.payload);
            })

    }
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;