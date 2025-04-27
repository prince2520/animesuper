import { throwError } from "./throwError";

// edit watchlist status
export const updateWatchlistAPI = async (category, category_id, status, progress_read_watched, token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/update-watchlist`,
    {
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: category,
        category_id: category_id,
        status: status,
        progress_read_watched: progress_read_watched,
      })
    }
  );

  const data = throwError(result);
  return data;
};

// add anime/manga to watchlist
export const createWatchlistAPI = async (
  category,
  category_id,
  img_url,
  title,
  num_episode_or_chapter,
  media_type,
  token
) => {
  console.log("createWatchlistAPI");

  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/create-watchlist`,
    {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: category,
        category_id: category_id,
        img_url: img_url,
        title: title,
        num_episode_or_chapter: num_episode_or_chapter,
        media_type: media_type,
      }),
    }
  );
  const data = throwError(result);
  return data;
};


//get user watchlist
export const getWatchlistAPI = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/get-watchlist`,
    {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }
  );
  const data = throwError(result);
  return data;
};

// delete anime/manga from watchlist
export const deleteWatchlistAPI = async (category, category_id, token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/delete-watchlist`,
    {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: category,
        category_id: category_id,
      }),
    }
  );

  const data = throwError(result);
  return data;
};
