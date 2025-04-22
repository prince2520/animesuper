export const removeFavoriteItemReducer = (state, action) => {
    state.removeCategory = action.payload.category;
    state.removeCategoryId = action.payload.categoryId;
};

export const saveMyFavoriteDataReducer = (state, action) => {
    console.log(action.payload)
    state.data = action.payload;
    state.filterData = action.payload.filter(res => res.fields.category === 'anime')
};

export const deleteFavoriteItemReducer = (state) => {
    state.data = state.data.filter(res => res.fields.category_id !== state.removeCategoryId);
    state.filterData = state.filterData.filter(res => res.fields.category_id !== state.removeCategoryId);
};

export const changeDataCategoryReducer = (state, action) => {
    state.filterData = state.data.filter(res => res.fields.category === action.payload.toLowerCase());
}