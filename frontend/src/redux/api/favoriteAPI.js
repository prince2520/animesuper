// add a anime/manga to the user favorites list
export const createFavoriteItemAPI = async (
  category_id,
  category,
  img_url,
  title,
  score,
  year,
  num_episode_chapter,
  media_type,
  token
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_favorite/add-item-favorite`,
    {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category_id: category_id,
        category: category,
        img_url: img_url,
        title: title,
        score: score,
        year: year,
        num_episode_chapter: num_episode_chapter,
        media_type: media_type,
      }),
    }
  );
  return result.json();
};

// get user anime/manga favorite list
export const getFavoriteListAPI = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_favorite/get-favorite-list`,
    {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );

  return result.json();
};

// remove anime/manga from favorites list
export const deleteFavoriteItemAPI = async (category, category_id, token) => {

  console.log("delete", category, category_id)
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_favorite/delete-favorite-item`,
    {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: category,
        category_id: category_id,
      })
    }
  );

  return result.json();
};
