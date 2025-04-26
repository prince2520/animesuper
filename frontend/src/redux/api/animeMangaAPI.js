import { throwError } from "./throwError";

export const getCategoryListAPI = async (
  category,
  rank_type,
  limit,
  offset = 0
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-list?category=${category}&rank_type=${rank_type}&limit=${limit}&offset=${offset}`
  );

  const data = throwError(result);
  return data;
};

// get anime/manga details
export const getAnimeMangaDetailAPI = async (category, id) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-detail/${id}?category=${category}`
  );
  const data = throwError(result);
  return data;
};

// search anime/manga
export const searchAnimeMangaAPI = async (category, animeName, limit) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/animeManga-search?category=${category}&animeName=${animeName}&limit=${limit}`
  );
  const data = throwError(result);
  return data;
};
