import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Skeleton from "react-loading-skeleton";

import { helperActions } from "../../../../redux/slice/helperSlice";
import { getAnimeDetail } from "../../../../api/animeManga";
import { AlertBoxActions } from "../../../../redux/slice/alertBoxSlice";
import { categoryType } from "../../../../constants/constants";

import AnimeMangaTop from "./AnimeMangaTop/AnimeMangaTop";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import AnimeMangaDetailBottom from "./AnimMangaDetailBottom/AnimeMangaDetailBottom";


import {createWatchlistThunk } from "../../../../redux/thunk/myWatchlistThunk";
import { createFavoriteThunk } from "../../../../redux/thunk/myFavoriteThunk";

import "./AnimeMangaDetail.css";

// Sub-Component 
const AnimeMangaTopMobile = ({ addToFavoriteHandler, addToWatchListHandler }) => {
  return (
    <div className="anime-detail-watchlist-like">
      <div
        className="anime-detail-watchlist-btn"
        onClick={() => addToWatchListHandler()}
      >
        <CustomButton width={"100%"} backgroundColor={"var(--primary)"}>
          <h5 className="color-text">Add to watchlist</h5>
        </CustomButton>
      </div>
      <div
        className="anime-detail-like-btn"
        onClick={() => addToFavoriteHandler()}
      >
        <Icon
          color="gray"
          style={{
            opacity: "0.7",
          }}
          icon="mdi:heart"
        />
      </div>
    </div>
  );
};


// Main-Component
const AnimeMangaDetail = () => {
  const dispatch = useDispatch();
  const { category, id } = useParams();

  const [animeDetail, setAnimeDetail] = useState();

  const { ref, inView } = useInView({
    threshold: 0.8,
    delay: 200,
  });

  useEffect(() => {
    getAnimeDetail(category, id).then((result) => {
      setAnimeDetail(result.data);
    });
  }, [category, id, dispatch]);

  useEffect(() => {
    dispatch(helperActions.blurNavbarReducer(!inView));
    if (!inView) {
      dispatch(helperActions.searchBarReducer(true));
    } else {
      dispatch(helperActions.searchBarReducer(false));
    }
    return () => {
      dispatch(helperActions.blurNavbarReducer(true));
    };
  }, [inView, dispatch]);

  // Add to anime/manga to watchlist
  const createWatchlistHandler = () => {
    dispatch(createWatchlistThunk({
      category,
      category_id: animeDetail.id,
      img_url: animeDetail.main_picture.medium,
      title: animeDetail.title,
      num_episode_or_chapter: (category === categoryType[0].toLowerCase())
        ? animeDetail.num_episodes
        : animeDetail.num_chapters,
      media_type: animeDetail.media_type,
    })).unwrap().then((res) => {
      dispatch(AlertBoxActions.getAlertBoxReducer(res))
    }).catch((err) => console.log(err));
  };

  const createFavoriteHandler = () => {
    dispatch(createFavoriteThunk({
      category_id: animeDetail.id,
      category: category,
      img_url: animeDetail.main_picture.large,
      title: animeDetail.title,
      score: animeDetail.mean ? animeDetail.mean : 0,
      year: animeDetail.start_date.slice(0, 4),
      num_episode_chapter: category === categoryType[1].toLowerCase()
        ? animeDetail.num_chapters
        : animeDetail.num_episodes,
      media_type: animeDetail.media_type,
    })).unwrap().then((res) => {
      dispatch(AlertBoxActions.getAlertBoxReducer(res));
    }).catch(err => console.log(err));
  };

  return (
    <div className="anime-detail-page">
      <div className="anime-detail-img" ref={ref}>
        {animeDetail?.main_picture ? (
          <img src={animeDetail?.main_picture.large} alt="anime" />
        ) : (
          <Skeleton height={"100%"} width={"100%"} />
        )}
        <AnimeMangaTopMobile
          addToWatchListHandler={createWatchlistHandler}
          addToFavoriteHandler={createFavoriteHandler} />
      </div>
      <AnimeMangaTop
        addToFavoriteHandler={createFavoriteHandler}
        addToWatchListHandler={createWatchlistHandler}
        animeDetail={animeDetail}
        category={category}
      />
      <AnimeMangaDetailBottom animeDetail={animeDetail} category={category} />
    </div>
  );
};

export default AnimeMangaDetail;
