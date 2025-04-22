import { createSlice } from "@reduxjs/toolkit";
import {
  animeStatus,
} from "../constants/constants";
import { changeCategoryReducer, currentStatusReducer, deleteWatchlistItemReducer, editWatchlistItemReducer, removeWatchlistItemReducer, saveMyWatchlistDataReducer, selectedWatchlistItemReducer } from "../reducer/myWatchlistReducer";

const initialMyWatchlistState = {
  removeCategoryId: 0,
  removeCategory: "",
  watchlistData: [],
  selectedWatchlistItem: {},
  filterData: [],
  currStatus: animeStatus[0],
};

const MyWatchlistSlice = createSlice({
  name: "myWatchlist",
  initialState: initialMyWatchlistState,
  reducers: {
    saveMyWatchlistDataReducer,
    selectedWatchlistItemReducer,
    removeWatchlistItemReducer,
    deleteWatchlistItemReducer,
    editWatchlistItemReducer,
    currentStatusReducer,
    changeCategoryReducer,
  },
});

export const MyWatchlistActions = MyWatchlistSlice.actions;
export default MyWatchlistSlice.reducer;
