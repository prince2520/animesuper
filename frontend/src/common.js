export const categoryType = ['Anime', 'Manga'];

export const getAlertIconAndColor = (success = false) => {
    let data = {
        primaryColor: `var(--error)`,
        secondaryColor: `var(--error-bold)`,
        icon: 'subway:error'
    }

    if (success)
        data = {
            primaryColor: `var(--success)`,
            secondaryColor: `var(--success-bold)`,
            icon: 'mdi:check-circle-outline'
        }

    return data;
};


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

export const animeStatus = ['All Anime', 'Dropped', 'Currently Watching', 'Complete', 'On Hold', 'Plan to watch'];

export const mangaStatus = ['All Manga', 'Dropped', 'Currently Reading', 'Complete', 'On Hold', 'Plan to read'];

export const detail_links = ['Information', 'Overview', 'Related'];
