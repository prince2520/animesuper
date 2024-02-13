import Skeleton from "react-loading-skeleton";

const AnimeMangaDetailInformation = ({ animeDetail }) => {
  return (
    <>
      <h3 className="heading information-heading">Information</h3>

      <div className="information">
        {!animeDetail && <Skeleton count={5} width={"90%"} />}

        {animeDetail?.media_type ? (
          <p>
            Type:{" "}
            <span className="color-text">
              {animeDetail.media_type.toUpperCase()}
            </span>
          </p>
        ) : null}

        {animeDetail?.num_episodes ? (
          <p>
            Episodes:{" "}
            <span className="color-text">{animeDetail.num_episodes}</span>
          </p>
        ) : null}

        {animeDetail?.status ? (
          <p>
            Status: <span className="color-text">{animeDetail.status}</span>
          </p>
        ) : null}

        {animeDetail?.start_date && animeDetail.end_date ? (
          <p>
            Aired:{" "}
            <span className="color-text">
              {animeDetail.start_date} to {animeDetail.end_date}
            </span>
          </p>
        ) : null}

        {animeDetail?.broadcast &&
        animeDetail?.broadcast.day_of_the_week &&
        animeDetail?.broadcast.start_time ? (
          <p>
            Broadcast:{" "}
            <span className="color-text">
              {animeDetail?.broadcast.day_of_the_week} at{" "}
              {animeDetail?.broadcast.start_time} (JST)
            </span>
          </p>
        ) : null}

        {animeDetail?.studios &&
        animeDetail?.studios.length &&
        animeDetail?.studios.length > 0 ? (
          <p>
            Studios:{" "}
            <span className="color-text">
              {animeDetail.studios.map((res) => `${res.name} `)}
            </span>
          </p>
        ) : null}

        {animeDetail?.rating ? (
          <p>
            Rating: <span className="color-text">{animeDetail.rating}</span>
          </p>
        ) : null}

        {animeDetail?.source ? (
          <p>
            Source: <span className="color-text">{animeDetail.source}</span>
          </p>
        ) : null}

        {animeDetail?.genres.length > 0 ? (
          <p>
            Genres:{" "}
            <span className="color-text">
              {animeDetail.genres.map((res) => `${res.name} `)}
            </span>
          </p>
        ) : null}

        {animeDetail?.average_episode_duration ? (
          <p>
            Duration:{" "}
            <span className="color-text">
              {Math.round(animeDetail.average_episode_duration / 60)} min. per
              ep
            </span>
          </p>
        ) : null}
      </div>
    </>
  );
};

export default AnimeMangaDetailInformation;
