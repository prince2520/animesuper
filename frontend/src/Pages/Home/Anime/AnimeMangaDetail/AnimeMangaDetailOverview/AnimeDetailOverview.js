const AnimeDetailOverview = ({animeDetail}) => {
    return (
        <>
            {animeDetail.synopsis && <div className="overview">
                <span className="heading">Overview</span>
                <p>{animeDetail.synopsis}</p>
            </div>}
        </>
    );
};

export  default AnimeDetailOverview;