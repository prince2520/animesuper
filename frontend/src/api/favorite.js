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