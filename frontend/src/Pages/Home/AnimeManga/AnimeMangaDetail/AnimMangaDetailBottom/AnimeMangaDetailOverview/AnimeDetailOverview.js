import Skeleton from "react-loading-skeleton";

const AnimeDetailOverview = ({animeDetail}) => {
    return (
        <>
            <div className="overview">
                <span className="heading">Overview</span>
                <p>{animeDetail?.synopsis || <Skeleton count={8}/>}</p>
            </div>
        </>
    );
};

export  default AnimeDetailOverview;