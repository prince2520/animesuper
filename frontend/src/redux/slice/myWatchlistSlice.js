import { createSlice } from "@reduxjs/toolkit";
import { createWatchlistReducer, deleteWatchlistReducer, getWatchlistReducer, selectedWatchlistReducer, updateWatchlistReducer } from "../reducer/myWatchlistReducer";
import { createWatchlistThunk, deleteWatchlistThunk, getWatchlistThunk, updateWatchlistThunk } from "../thunk/myWatchlistThunk";

const initialMyWatchlistState = {
  watchlist: {
    anime: [],
    manga: []
  },

  selectedCategory: "",
  selectedCategoryId: ""
};

const MyWatchlistSlice = createSlice({
  name: "myWatchlist",
  initialState: initialMyWatchlistState,
  reducers: {
    selectedWatchlistReducer,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWatchlistThunk.fulfilled, getWatchlistReducer)

    builder
      .addCase(createWatchlistThunk.fulfilled, createWatchlistReducer)

    builder
      .addCase(deleteWatchlistThunk.fulfilled, deleteWatchlistReducer)

    builder
      .addCase(updateWatchlistThunk.fulfilled, updateWatchlistReducer)
  }
});

export const MyWatchlistActions = MyWatchlistSlice.actions;
export default MyWatchlistSlice.reducer;
