export const selectedFavoriteReducer = (state, action) => {
    const { selectedCategory, selectedCategoryId } = action.payload;

    state.selectedCategory = selectedCategory;
    state.selectedCategoryId = selectedCategoryId;
}

export const getFavoriteListReducer = (state, action) => {
    state.favorite.anime = action.payload.anime ?? [];
    state.favorite.manga = action.payload.manga ?? [];
};

export const deleteFavoriteReducer = (state, action) => {
    const { category, category_id } = action.payload;
    state.favorite[category] = state.favorite[category].concat().filter((item) => item.category_id !== category_id);
}

export const createFavoriteReducer = (state, action) => {
    const { category } = action.payload;
    state.favorite[category].push(action.payload);
}