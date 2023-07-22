export const categoryType = ['Anime', 'Manga'];


export const getAlertIconAndColor = (success = false) => {
    let data = {
        primaryColor: '#F05454',
        secondaryColor: '#AF2D2D',
        icon: 'subway:error'
    }

    if (success)
        data = {
            primaryColor: '#2D6A4F',
            secondaryColor: '#004440',
            icon: 'mdi:check-circle-outline'
        }

    return data;
}


export const animeCategory = [
    {
        title: "Airing",
        slug: "airing"
    },
    {
        title: "Tv Series",
        slug: "tv"
    },
    {
        title: "Movies",
        slug: "movie"
    },
    {
        title: "Popular",
        slug: "bypopularity"
    },
    {
        title: "Favorite",
        slug: "favorite"
    },
    {
        title: "Upcoming",
        slug: "upcoming"
    }
];

export const mangaCategory = [
    {
        title: "Manga",
        slug: "manga"
    },
    {
        title: "Novels",
        slug: "novels"
    },
    {
        title: "One-shots",
        slug: "oneshots"
    },
    {
        title: "Manhwa",
        slug: "manhwa"
    },
    {
        title: "Manhua",
        slug: "manhua"
    },
    {
        title: "Popular",
        slug: "bypopularity"
    }
];