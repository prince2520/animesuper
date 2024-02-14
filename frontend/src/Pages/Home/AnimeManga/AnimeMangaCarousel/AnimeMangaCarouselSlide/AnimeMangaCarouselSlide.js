import React, { useEffect } from "react";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";

import { AnimeActions } from "../../../../../store/anime";
import { getAnimeDetail } from "../../../../../api/animeManga";

import CustomButton from "../../../../../components/CustomButton/CustomButton";

import '../AnimeMangaCarouselSlide/AnimeMangaCarouselSlide.css';

const AnimeMangaCarouselSlide = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const animeMangaCarouselData = useSelector(
    (state) => state.anime.animeMangaCarouselData[props.category_id]
  );

  useEffect(() => {
    getAnimeDetail(props.category, props.category_id).then((res) => {
      dispatch(
        AnimeActions.saveCarouselData({
          id: res.id,
          category: props.category,
          title: res.title,
          synopsis: res.synopsis,
          media_type: res.media_type,
          average_episode_duration: res.average_episode_duration,
          start_date: res.start_date,
        })
      );
    });
  }, [props.category, props.category_id, dispatch]);

  return (
    <div>
      <div className="img-overlay">
        <div className="content">
          <h2 className="title">
            {animeMangaCarouselData?.title.slice(0, 250) || (
              <Skeleton width={"80%"} count={1} />
            )}
          </h2>
          <p className="synopsis color-text-light">
            {animeMangaCarouselData?.synopsis.slice(0, 250) || (
              <Skeleton count={3} />
            )}
            {animeMangaCarouselData?.synopsis && "..."}
          </p>

          <div className="flex-center more-info">
            {animeMangaCarouselData?.media_type && (
              <div className="type">
                <Icon
                  className="color-text-light"
                  icon="material-symbols:play-circle-outline-rounded"
                />
                <h6>{animeMangaCarouselData?.media_type.toUpperCase()}</h6>
              </div>
            )}
            {!animeMangaCarouselData?.media_type && (
              <Skeleton width={60} height={22} />
            )}

            {animeMangaCarouselData?.average_episode_duration && (
              <div className="duration">
                <Icon
                  className="color-text-light"
                  icon="mdi:clock-time-three-outline"
                />
                <h6>{`${Math.round(
                  animeMangaCarouselData?.average_episode_duration / 60
                )}m`}</h6>
              </div>
            )}

            {animeMangaCarouselData?.start_date && (
              <div className="release-date">
                <Icon
                  className="color-text-light"
                  icon="simple-line-icons:calender"
                />
                <h6>{animeMangaCarouselData?.start_date}</h6>
              </div>
            )}
            {!animeMangaCarouselData?.start_date && (
              <Skeleton width={60} height={22} />
            )}
          </div>

          <div
            className="detail"
            onClick={() => navigate(`${props.category_id}`)}
          >
            <CustomButton width={"100%"} backgroundColor={"var(--primary)"}>
              <h5 className="color-text">Detail</h5>
            </CustomButton>
          </div>
        </div>
      </div>
      <img src={props.coverImg} alt="cyberpunk" />
    </div>
  );
};

export default AnimeMangaCarouselSlide;
