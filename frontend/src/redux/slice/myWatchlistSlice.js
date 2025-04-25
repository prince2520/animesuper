import { createSlice } from "@reduxjs/toolkit";
import {  createWatchlistReducer, deleteWatchlistReducer, getWatchlistReducer, saveDeleteWatchlistReducer } from "../reducer/myWatchlistReducer";
import { createWatchlistThunk, deleteWatchlistThunk, getWatchlistThunk } from "../thunk/myWatchlistThunk";

const initialMyWatchlistState = {
  watchlist: {
    anime: [],
    manga: []
  },

  deleteWatchlistCategory: "",
  deleteWatchlistCategoryId: ""
};

const MyWatchlistSlice = createSlice({
  name: "myWatchlist",
  initialState: initialMyWatchlistState,
  reducers: {
    saveDeleteWatchlistReducer
  },

  extraReducers: (builder) => {
    builder
      .addCase(getWatchlistThunk.fulfilled, getWatchlistReducer)
      .addCase(getWatchlistThunk.rejected, (state, actions) => {
        console.log(actions.payload);
      })

    builder
      .addCase(createWatchlistThunk.fulfilled, createWatchlistReducer)
      .addCase(createWatchlistThunk.rejected, (state, actions) => {
        console.log(actions.payload);
      })

    builder
      .addCase(deleteWatchlistThunk.fulfilled, deleteWatchlistReducer)
      .addCase(deleteWatchlistThunk.rejected, (state, actions)=>{
        console.log(actions.payload)
      })
  }
});

export const MyWatchlistActions = MyWatchlistSlice.actions;
export default MyWatchlistSlice.reducer;
