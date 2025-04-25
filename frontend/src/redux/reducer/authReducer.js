export const saveAuthReducer = (state, action) => {
    const { username, email, profile_photo, gender, location, favorite_genre, token } = action.payload;

    state.username = username;
    state.email = email;
    state.profile_photo = profile_photo;
    state.gender = gender;
    state.location = location;
    state.favorite_genre = favorite_genre;

    if (token)
        state.token = token;
};


export const saveAuthSatisticsReducer = (state, action) => {
    const { animeStats, mangaStats } = action.payload;

    state.animeStats = animeStats;
    state.mangaStats = mangaStats;
}

export const updateIsAuthReducer = (state, action) => {
    state.isAuth = action.payload.isAuth;
}