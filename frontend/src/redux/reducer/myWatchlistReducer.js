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
    const {category} = action.payload;
    state.watchlist[category].push(action.payload);
}


export const deleteWatchlistReducer = (state, action) => {
    const {category, category_id} = action.payload;
    state.watchlist[category] = state.watchlist[category].concat().filter((item) => item.category_id !== category_id);
}

export const selectedWatchlistReducer = (state, action) => {
    const { selectedCategory, selectedCategoryId } = action.payload;
    state.selectedCategory = selectedCategory;
    state.selectedCategoryId = selectedCategoryId;
}



export const updateWatchlistReducer = (state, action) => {
    const { category, category_id, status, progress_read_watched } = action.payload;


    state.watchlist[category] = state.watchlist[category].map(item => {
        if (item.category_id === category_id) {
            item.color = getStatusColor(status);
            item.progress_read_watched = progress_read_watched;
            item.status = status;

            console.log(JSON.parse(JSON.stringify(item)));

        }
        return item;
    });

    return state;
}