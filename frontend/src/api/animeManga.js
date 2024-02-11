// get anime/manga category list
export const getCategoryList = async (category, rank_type, limit) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-list?category=${category}&rank_type=${rank_type}&limit=${limit}`
  );
  return result.json();
};


// get anime/manga details 
export const getAnimeDetail = async (category, id) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-detail/${id}?category=${category}`
  );
  return result.json();
};


// search anime/manga
export const searchAnime = async (category, animeName, limit) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-search?category=${category}&animeName=${animeName}&limit=${limit}`
  );
  return result.json();
};
