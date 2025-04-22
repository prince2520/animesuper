import {createSlice} from '@reduxjs/toolkit';
import { addNewGenreReducer, deleteGenreReducer, saveProfileDataReducer } from '../reducer/myProfileReducer';

const initialMyProfileState = {
    username: '',
    profile_photo: '',
    gender: '',
    location: '',
    old_favorite_genre: [],
    new_favorite_genre: []

};

const MyProfileSlice = createSlice({
    name: 'myProfile',
    initialState: initialMyProfileState,
    reducers: {
        saveProfileDataReducer,
        addNewGenreReducer,
        deleteGenreReducer
    }
});

export const MyProfileActions = MyProfileSlice.actions;
export default MyProfileSlice.reducer;