export const sideBarData = (isAuth) => {
    return [
        {
            categoryTitle: "Category",
            subCategoryData: [
                {
                    name: 'Anime',
                    icon: 'bx:movie-play',
                    to: 'anime'
                },
                {
                    name: 'Manga',
                    icon: 'material-symbols:menu-book-outline-rounded',
                    to: 'manga'
                }
            ],
            isAuth: true
        },
        {
            categoryTitle: "Library",
            subCategoryData: [
                {
                    name: 'Watchlist',
                    icon: 'ph:book-bookmark',
                    to: 'my-watchlist'
                },
                {
                    name: 'Favorite',
                    icon: 'mdi:cards-heart',
                    to: 'my-favorite'
                }
            ],
            isAuth: isAuth
        },
    ]
}