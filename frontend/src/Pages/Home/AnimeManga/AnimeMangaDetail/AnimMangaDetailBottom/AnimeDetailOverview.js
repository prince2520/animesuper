import Skeleton from "react-loading-skeleton";

const AnimeDetailOverview = ({ animeDetail }) => {
  return (
    <>
      <div className="overview" style={{ width: "100%" }}>
        <h3 className="heading">Overview</h3>
        <p>{animeDetail?.synopsis || <Skeleton count={8} />}</p>
      </div>
    </>
  );
};

export default AnimeDetailOverview;
