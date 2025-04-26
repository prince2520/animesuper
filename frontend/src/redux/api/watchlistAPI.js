// edit watchlist status
export const updateWatchlistAPI = async (category, category_id, status, progress_read_watched, token) => {
  console.log(category, category_id, status, progress_read_watched, token);
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/edit-watchlist-item`,
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

  return result.json();
};

// add anime/manga to watchlist
export const createWatchlistItemAPI = async (
  category,
  category_id,
  img_url,
  title,
  num_episode_or_chapter,
  media_type,
  token
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/add-watchlist-item`,
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
  return result.json();
};


//get user watchlist
export const getWatchlistAPI = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/get-watchlist-list`,
    {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }
  );

  return result.json();
};

// delete anime/manga from watchlist
export const deleteWatchlistItemAPI = async (category, category_id, token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/delete-watchlist-item`,
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

  return result.json();
};
