import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Skeleton from "react-loading-skeleton";

import { categoryType } from "../../../../common";
import { helperActions } from "../../../../store/helper";
import { addToFavorite } from "../../../../api/favorite";
import { addToWatchlist } from "../../../../api/watchlist";
import { getAnimeDetail } from "../../../../api/animeManga";
import { AlertBoxActions } from "../../../../store/alertBox";

import AuthContext from "../../../../Context/auth";
import AnimeMangaTop from "./AnimeMangaTop/AnimeMangaTop";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import AnimeMangaDetailBottom from "./AnimMangaDetailBottom/AnimeMangaDetailBottom";

import "./AnimeMangaDetail.css";

const AnimeMangaDetail = () => {
  const dispatch = useDispatch();
  const { category, id } = useParams();
  const authCtx = useContext(AuthContext);
  const [animeDetail, setAnimeDetail] = useState();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
    delay: 200,
  });

  useEffect(() => {
    getAnimeDetail(category, id).then((result) => {
      setAnimeDetail(result);
    });
  }, [category, id, dispatch]);

  useEffect(() => {
    dispatch(helperActions.blurNavbarHandler(!inView));
    if (!inView) {
      dispatch(helperActions.searchBarHandler(true));
    } else {
      dispatch(helperActions.searchBarHandler(false));
    }
    return () => {
      dispatch(helperActions.blurNavbarHandler(true));
    };
  }, [inView, dispatch]);

  // Add to anime/manga to watchlist
  const addToWatchListHandler = () => {
    if (authCtx.isAuth) {
      addToWatchlist(
        authCtx.email,
        category,
        animeDetail.id,
        animeDetail.main_picture.medium,
        animeDetail.title,
        category === categoryType[0].toLowerCase()
          ? animeDetail.num_episodes
          : animeDetail.num_chapters,
        animeDetail.media_type
      )
        .then((res) => dispatch(AlertBoxActions.saveAlertBoxData(res)))
        .catch((err) => console.log(err));
    } else {
      dispatch(
        AlertBoxActions.saveAlertBoxData({
          success: false,
          description: "User not Authenticated, Please login!",
        })
      );
    }
  };

  // Add to anime/manga to favorite list
  const addToFavoriteHandler = () => {
    if (authCtx.isAuth) {
      addToFavorite(
        authCtx.email,
        animeDetail.id,
        category,
        animeDetail.main_picture.large,
        animeDetail.title,
        animeDetail.mean ? animeDetail.mean : 0,
        animeDetail.start_date.slice(0, 4),
        category === categoryType[1].toLowerCase()
          ? animeDetail.num_chapters
          : animeDetail.num_episodes,
        animeDetail.media_type
      )
        .then((res) => {
          dispatch(AlertBoxActions.saveAlertBoxData(res));
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(
        AlertBoxActions.saveAlertBoxData({
          success: false,
          description: "User not Authenticated, Please login!",
        })
      );
    }
  };

  return (
    <div className="anime-detail-page">
      <div className="anime-detail-img" ref={ref}>
        {animeDetail?.main_picture ? (
          <img src={animeDetail?.main_picture.large} alt="anime" />
        ) : (
          <Skeleton height={"100%"} width={"100%"} />
        )}
        <div className="anime-detail-watchlist-like">
          <div
            className="anime-detail-watchlist-btn"
            onClick={() => addToWatchListHandler()}
          >
            <CustomButton title={"Add to watchlist"}></CustomButton>
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
      </div>
      <AnimeMangaTop
        addToFavoriteHandler={addToFavoriteHandler}
        addToWatchListHandler={addToWatchListHandler}
        animeDetail={animeDetail}
        category={category}
      />
      <AnimeMangaDetailBottom animeDetail={animeDetail} category={category} />
    </div>
  );
};

export default AnimeMangaDetail;
