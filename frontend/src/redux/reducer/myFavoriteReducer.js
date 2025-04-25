export const getFavoriteListReducer = (state, action) => {
    state.favorite.anime = action.payload.anime ?? [];
    state.favorite.manga = action.payload.manga ?? []
};

export const deleteFavoriteReducer = (state, action) => {
    if (action.payload.category === "anime")
        state.favorite.anime = state.favorite.anime.concat().filter((item) => item.category_id !== action.payload.category_id);
    else
        state.favorite.manga = state.favorite.manga.concat().filter((item) => item.category_id !== action.payload.category_id);
}

export const saveDeleteFavoriteReducer = (state, action) =>{
    const {deleteFavoriteCategory, deleteFavoriteCategoryId} = action.payload;
    
    state.deleteFavoriteCategory = deleteFavoriteCategory;
    state.deleteFavoriteCategoryId = deleteFavoriteCategoryId;

}

export const createFavoriteReducer = (state, action) => {
    if (action.payload.category === "anime")
        state.favorite.anime.push(action.payload)
    else
        state.favorite.manga.push(action.payload)
}