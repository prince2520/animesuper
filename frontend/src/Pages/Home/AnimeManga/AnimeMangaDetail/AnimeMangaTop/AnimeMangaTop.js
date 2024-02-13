import { Icon } from "@iconify/react";

import Skeleton from "react-loading-skeleton";
import CustomButton from "../../../../../components/CustomButton/CustomButton"

const AnimeMangaTop = ({
  animeDetail,
  addToFavoriteHandler,
  addToWatchListHandler,
}) => {
  return (
    <div className="anime-detail-top">
      <div className="anime-detail-top-content">
        <div className="anime-detail-top-left">
          {animeDetail?.main_picture ? (
            <img src={animeDetail?.main_picture.large} alt="main" />
          ) : (
            <Skeleton height={"100%"} />
          )}
          {animeDetail?.main_picture && (
            <div className="anime-detail-top-left-content">
              <div className="rating-favorite-container">
                <span className="flex-center rating">
                  <Icon
                    color="yellow"
                    style={{ fontSize: "1.25rem" }}
                    icon="material-symbols:star"
                  />
                  <p className="color-text">{animeDetail?.mean ? animeDetail.mean : "N/A"}</p>
                </span>
                <span
                  onClick={() => addToFavoriteHandler()}
                  style={{ zIndex: "100"}}
                  className="cursor-btn favorite"
                >
                  <Icon
                    color="gray"
                    style={{
                      fontSize: "2.25rem",
                      opacity: "0.7",
                    }}
                    icon="mdi:heart"
                  />
                </span>
              </div>
              <div onClick={() => addToWatchListHandler()}>
                <CustomButton width={"100%"} backgroundColor={'var(--primary)'}><h5 className="color-text">Add to watchlist</h5></CustomButton>
              </div>
            </div>
          )}
        </div>
        <div className="anime-detail-top-right">
          <div className="title">
            <h2>{animeDetail?.title || <Skeleton />}</h2>
          </div>
          <div className="rating-popularity-container">
            {animeDetail?.rank && (
              <h5 className="rating">Rating # {animeDetail?.rank}</h5>
            )}
            {animeDetail?.popularity && (
              <h5 className="popularity">
                Popularity # {animeDetail?.popularity}
              </h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeMangaTop;
