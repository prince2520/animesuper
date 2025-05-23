import { createSlice } from "@reduxjs/toolkit";
import { createWatchlistReducer, deleteWatchlistReducer, getWatchlistReducer, resetWatchlistReducer, selectedWatchlistReducer, updateWatchlistReducer } from "../reducer/myWatchlistReducer";
import { createWatchlistThunk, deleteWatchlistThunk, getWatchlistThunk, updateWatchlistThunk } from "../thunk/myWatchlistThunk";

export const initialMyWatchlistState = {
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
    resetWatchlistReducer
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWatchlistThunk.fulfilled, getWatchlistReducer)
      .addCase(getWatchlistThunk.rejected, (_, actions) => {
        console.error(actions.payload);
      })

    builder
      .addCase(createWatchlistThunk.fulfilled, createWatchlistReducer)
      .addCase(createWatchlistThunk.rejected, (_, actions) => {
        console.error(actions.payload);
      })

    builder
      .addCase(deleteWatchlistThunk.fulfilled, deleteWatchlistReducer)
      .addCase(deleteWatchlistThunk.rejected, (_, actions) => {
        console.error(actions.payload);
      })

    builder
      .addCase(updateWatchlistThunk.fulfilled, updateWatchlistReducer)
      .addCase(updateWatchlistThunk.rejected, (_, actions) => {
        console.error(actions.payload);
      })
  }
});

export const MyWatchlistActions = MyWatchlistSlice.actions;
export default MyWatchlistSlice.reducer;
