import {createSlice} from '@reduxjs/toolkit';

const initialMyFavoriteState = {
    removeCategory: 'none',
    removeCategoryId: 0,
    data: [],
    filterData: []
};

const MyFavoriteSlice = createSlice({
    name: 'myFavorite',
    initialState: initialMyFavoriteState,
    reducers: {
        removeFavoriteItem(state, action) {
            state.removeCategory = action.payload.category;
            state.removeCategoryId = action.payload.categoryId;
        },
        saveMyFavoriteData(state, action) {
            console.log(action.payload)
            state.data = action.payload;
            state.filterData = action.payload.filter(res => res.fields.category === 'anime')
        },
        deleteFavoriteItem(state) {
            state.data = state.data.filter(res => res.fields.category_id !== state.removeCategoryId);
            state.filterData = state.filterData.filter(res => res.fields.category_id !== state.removeCategoryId);
        },
        changeDataCategory(state, action) {
            state.filterData = state.data.filter(res => res.fields.category === action.payload.toLowerCase());
        }
    }
});

export const MyFavoriteActions = MyFavoriteSlice.actions;
export default MyFavoriteSlice.reducer;