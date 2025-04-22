export const saveProfileDataReducer = (state, action) => {
    state.username = action.payload.username;
    state.gender = action.payload.gender;
    state.location = action.payload.location;
    state.old_favorite_genre = action.payload.favorite_genre;
    state.new_favorite_genre = action.payload.favorite_genre;

    if (action.payload.profile_photo)
        state.profile_photo = action.payload.profile_photo;
};

export const addNewGenreReducer = (state, action) => {
    if (!state.new_favorite_genre.includes(action.payload)) {
        state.new_favorite_genre = [...state.new_favorite_genre, action.payload]
    }
};

export const deleteGenreReducer = (state, action) => {
    state.new_favorite_genre = state.new_favorite_genre.filter(genre => action.payload !== genre)
}