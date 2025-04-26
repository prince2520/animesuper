export const saveAuthReducer = (state, action) => {
    const { username, email, profile_photo, gender, location, favorite_genre, token } = action.payload;

    console.log("action.payload", action.payload)
    state.username = username;
    state.email = email;
    state.profile_photo = profile_photo;
    state.gender = gender;
    state.location = location;
    state.favorite_genre = favorite_genre.map(fav=>{
        return fav.fields.name
    });
    state.isAuth = true;

    if (token)
        state.token = token;
};


export const saveAuthSatisticsReducer = (state, action) => {
    const { anime, manga } = action.payload;

    state.stats.anime = anime;
    state.stats.manga = manga;
}

export const updateIsAuthReducer = (state, action) => {
    state.isAuth = action.payload.isAuth;
}