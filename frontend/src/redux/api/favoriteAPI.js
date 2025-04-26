import { throwError } from "./throwError";

// add a anime/manga to the user favorites list
export const createFavoriteAPI = async (
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
    `${process.env.REACT_APP_SERVER_URL}/my_favorite/create-favorite`,
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
  const data = throwError(result);
  return data;
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

  const data = throwError(result);
  return data;
};

// remove anime/manga from favorites list
export const deleteFavoriteAPI = async (category, category_id, token) => {

  console.log("delete", category, category_id)
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_favorite/delete-favorite`,
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

  const data = throwError(result);
  return data;
};
