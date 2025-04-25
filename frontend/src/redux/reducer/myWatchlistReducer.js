import {
    animeStatus,
    mangaStatus,
    getStatusColor,
} from "../../constants/constants";


export const getWatchlistReducer = (state, action) => {
    state.watchlist.anime = action.payload.anime?.map((item) => { return { ...item, color: getStatusColor(item.status) } }) ?? [];
    state.watchlist.manga = action.payload.manga?.map((item) => { return { ...item, color: getStatusColor(item.status) } }) ?? [];
};

export const createWatchlistReducer = (state, action) => {
    if (action.payload.category === "anime")
        state.watchlist.anime.push(action.payload);
    else
        state.watchlist.manga.push(action.payload);
}


export const deleteWatchlistReducer = (state, action) => {
    if (action.payload.category === "anime")
        state.watchlist.anime = state.watchlist.anime.concat().filter((item) => item.category_id !== action.payload.category_id);
    else
        state.watchlist.manga = state.watchlist.manga.concat().filter((item) => item.category_id !== action.payload.category_id);
}

export const saveDeleteWatchlistReducer = (state, action) =>{
    const {deleteWatchlistCategory, deleteWatchlistCategoryId} = action.payload;
    
    state.deleteWatchlistCategory = deleteWatchlistCategory;
    state.deleteWatchlistCategoryId = deleteWatchlistCategoryId;
}


export const saveMyWatchlistDataReducer = (state, action) => {
    state.watchlistData = action.payload.map((res) => {
        let color = getStatusColor(res.fields.status);
        return { ...res, color: color };
    });
    state.filterData = state.watchlistData.filter(
        (res) => res.fields.category === "anime"
    );
};

export const selectedWatchlistItemReducer = (state, action) => {
    state.selectedWatchlistItem = action.payload;
};

export const removeWatchlistItemReducer = (state, action) => {
    state.removeCategory = action.payload.category;
    state.removeCategoryId = action.payload.categoryId;
};

export const deleteWatchlistItemReducer = (state) => {
    state.watchlistData = state.watchlistData.filter(
        (res) => res.fields.category_id !== state.removeCategoryId
    );
    state.filterData = state.filterData.filter(
        (res) => res.fields.category_id !== state.removeCategoryId
    );
};


export const editWatchlistItemReducer = (state, action) => {
    const editData = (res) => {
        if (res.fields.category_id === action.payload.category_id) {
            res.color = getStatusColor(action.payload.status);
            res.fields.progress_read_watched =
                action.payload.progress_read_watched;
            res.fields.status = action.payload.status;
        }
    };
    state.watchlistData = state.watchlistData.map((res) => {
        editData(res);
        return res;
    });

    state.filterData = state.filterData.map((res) => {
        editData(res);
        return res;
    });

    if (
        state.currStatus !== animeStatus[0] &&
        state.currStatus !== mangaStatus[0]
    )
        state.filterData = state.filterData.filter(
            (res) => res.fields.status === state.currStatus
        );
};

export const currentStatusReducer = (state, action) => {
    state.currStatus = action.payload.currStatus;
    if (
        action.payload.currStatus !== animeStatus[0] &&
        action.payload.currStatus !== mangaStatus[0]
    ) {
        state.filterData = state.watchlistData.filter(
            (res) =>
                res.fields.status === action.payload.currStatus &&
                res.fields.category ===
                action.payload.selectedCategory.toLowerCase()
        );
    } else {
        state.filterData = state.watchlistData.filter(
            (res) =>
                res.fields.category ===
                action.payload.selectedCategory.toLowerCase()
        );
    }
};


export const changeCategoryReducer = (state, action) => {
    state.currStatus =
        action.payload.toLowerCase() === "anime"
            ? animeStatus[0]
            : mangaStatus[0];
    state.filterData = state.watchlistData.filter(
        (res) => res.fields.category === action.payload.toLowerCase()
    );
};