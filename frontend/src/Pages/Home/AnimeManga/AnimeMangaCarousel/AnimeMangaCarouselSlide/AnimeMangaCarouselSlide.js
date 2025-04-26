import React, { useEffect } from "react";

import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import CustomButton from "../../../../../components/CustomButton/CustomButton";
import { getAnimeMangaDetailThunk } from "../../../../../redux/thunk/animeMangaThunk";

const AnimeMangaCarouselSlide = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const carouselData = useSelector((state) => state.animeManga.carousel[data.category_id]);

  useEffect(() => {
    dispatch(getAnimeMangaDetailThunk({
      category: data.category,
      id: data.category_id
    }));
  }, [data.category, data.category_id, dispatch]);

  return (
    <div>
      <div className="img-overlay">
        <div className="content">
          <h2 className="title">
            {carouselData?.title.slice(0, 250) || (
              <Skeleton width={"80%"} count={1} />
            )}
          </h2>
          <p className="synopsis color-text-light">
            {carouselData?.synopsis.slice(0, 250) || (
              <Skeleton count={3} />
            )}
            {carouselData?.synopsis && "..."}
          </p>

          <div className="flex-center more-info">
            {carouselData?.media_type && (
              <div className="type">
                <Icon
                  className="color-text-light"
                  icon="material-symbols:play-circle-outline-rounded"
                />
                <h6>{carouselData?.media_type.toUpperCase()}</h6>
              </div>
            )}
            {!carouselData?.media_type && (
              <Skeleton width={60} height={22} />
            )}

            {carouselData?.average_episode_duration && (
              <div className="duration">
                <Icon
                  className="color-text-light"
                  icon="mdi:clock-time-three-outline"
                />
                <h6>{`${Math.round(
                  carouselData?.average_episode_duration / 60
                )}m`}</h6>
              </div>
            )}

            {carouselData?.start_date && (
              <div className="release-date">
                <Icon
                  className="color-text-light"
                  icon="simple-line-icons:calender"
                />
                <h6>{carouselData?.start_date}</h6>
              </div>
            )}
            {!carouselData?.start_date && (
              <Skeleton width={60} height={22} />
            )}
          </div>

          <div
            className="detail"
            onClick={() => navigate(`${data.category_id}`)}
          >
            <CustomButton width={"100%"} backgroundColor={"var(--primary)"}>
              <h5 className="color-text">Detail</h5>
            </CustomButton>
          </div>
        </div>
      </div>
      <img src={data.coverImg} alt="cyberpunk" />
    </div>
  );
};

export default AnimeMangaCarouselSlide;
