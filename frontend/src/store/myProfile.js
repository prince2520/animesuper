import {createSlice} from '@reduxjs/toolkit';

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
        saveProfileData(state, action) {
            state.username = action.payload.username;
            state.gender = action.payload.gender;
            state.location = action.payload.location;
            state.old_favorite_genre = action.payload.favorite_genre;
            state.new_favorite_genre = action.payload.favorite_genre;

            if (action.payload.profile_photo)
                state.profile_photo = action.payload.profile_photo;
        },
        addNewGenre(state, action) {
            if (!state.new_favorite_genre.includes(action.payload)) {
                state.new_favorite_genre = [...state.new_favorite_genre, action.payload]
            }

        },
        deleteGenre(state, action) {
            state.new_favorite_genre = state.new_favorite_genre.filter(genre => action.payload !== genre)
        }

    }
});

export const MyProfileActions = MyProfileSlice.actions;
export default MyProfileSlice.reducer;