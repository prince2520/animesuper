export const saveAnimeMangaReducer = (state, action) => {
    const { category, slug, data } = action.payload;

    if (category === "anime")
        state.anime[slug] = data;
    else
        state.manga[slug] = data;

};

export const saveCarouselDataReducer = (state, action) => {
    const {
        id,
    } = action.payload;
    state.carousel[id] = action.payload;
}