// edit watchlist status
export const editStatusAPI = async (email, status, progress, category_id) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/edit-watchlist-item`,
    {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        category_id: category_id,
        progress: progress,
        status: status,
      }),
    }
  );

  return result.json();
};

// add anime/manga to watchlist
export const addToWatchlistAPI = async (
  email,
  category,
  category_id,
  img_url,
  title,
  num_episode_or_chapter,
  media_type
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/add-watchlist-item`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
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
export const getMyWatchlistAPI = async (email, token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/get-watchlist-list?email=${email}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return result.json();
};

// delete anime/manga from watchlist
export const deleteWatchlistItemAPI = async (email, category, categoryId) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/my_watchlist/delete-watchlist-item?email=${email}&categoryId=${categoryId}`
  );

  return result.json();
};
