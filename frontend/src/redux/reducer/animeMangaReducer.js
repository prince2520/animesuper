export const saveAnimeMangaReducer = (state, action) => {
    const { category, slug, data } = action.payload;

    if (category === "anime")
        state.animeRankData[slug] = data;
    else
        state.mangaRankData[slug] = data;

};

export const saveCarouselDataReducer = (state, action) => {
    const {
        id,
    } = action.payload;
    state.animeMangaCarouselData[id] = action.payload;
}