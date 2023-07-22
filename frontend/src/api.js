export const getCategoryList = async (category, rank_type, limit) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-list?category=${category}&rank_type=${rank_type}&limit=${limit}`);
    return result.json();
};

export const getAnimeDetail = async (category, id) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-detail/${id}?category=${category}`);
    return result.json();
}

export const searchAnime = async (category, animeName, limit) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-search?category=${category}&animeName=${animeName}&limit=${limit}`);
    return result.json();
}

export const addToFavorite = async (email, category_id, category, img_url, title, score, year, num_episode_chapter, media_type) => {

    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_favorite/add-item-favorite`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            category_id: category_id,
            category: category,
            img_url: img_url,
            title: title,
            score: score,
            year: year,
            num_episode_chapter: num_episode_chapter,
            media_type: media_type
        })
    });

    return result.json();
}

export const getFavoriteList = async (email) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_favorite/get-favorite-list?email=${email}`);

    return result.json()
}

export const removeFavoriteItem = async (email, category, categoryId) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_favorite/delete-favorite-item?email=${email}&category=${category}&categoryId=${categoryId}`);

    return result.json()
}

export const addToWatchlist = async (email, category, category_id, img_url, title, num_episode_or_chapter, media_type) => {
    console.log('category', category)
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_watchlist/add-watchlist-item`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            category: category,
            category_id: category_id,
            img_url: img_url,
            title: title,
            num_episode_or_chapter: num_episode_or_chapter,
            media_type: media_type
        })
    });
    return result.json();
}

export const getMyWatchlist = async (email, token) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_watchlist/get-watchlist-list?email=${email}`, {
        headers: {
            Authorization: `Token ${token}`
        }
    });

    return result.json()
}

export const deleteWatchlistItem = async (email, category, categoryId) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_watchlist/delete-watchlist-item?email=${email}&categoryId=${categoryId}`);

    return result.json()
}

export const editStatus = async (email, status, progress, category_id) => {

    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/my_watchlist/edit-watchlist-item`, {
        method: 'PUT',
        body: JSON.stringify({
            email: email,
            category_id: category_id,
            progress: progress,
            status: status
        })
    });

    return result.json()
}


export const contactUs = async (email, message) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/animeManga/contact-us`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            message: message
        })
    });
    return result.json()
}


export const getProfileDetail = async (email) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/profile-detail?email=${email}`)

    return result.json()
}

export const saveProfile = async (email, username, gender, location, favorite_genre, photoUrl) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/edit-profile`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            username: username,
            gender: gender,
            location: location,
            favorite_genre: favorite_genre,
            profile_photo: photoUrl
        })
    })

    return result.json();
}

export const getProfileStatistics = async (email) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/profile-satistics?email=${email}`)

    return result.json()
}