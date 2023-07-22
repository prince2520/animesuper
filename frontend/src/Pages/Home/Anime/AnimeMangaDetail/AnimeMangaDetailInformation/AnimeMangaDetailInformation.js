const AnimeMangaDetailInformation = ({animeDetail}) => {
    return(
        <>
            <span className="heading">Information</span>
            <div className="information">
                {animeDetail.media_type &&
                    <p>Type: <span className="value">{animeDetail.media_type.toUpperCase()}</span></p>}
                {animeDetail.num_episodes &&
                    <p>Episodes: <span className="value">{animeDetail.num_episodes}</span></p>}
                {animeDetail.status && <p>Status: <span className="value">{animeDetail.status}</span></p>}
                {animeDetail.start_date && animeDetail.end_date &&
                    <p>Aired: <span className="value">{animeDetail.start_date} - {animeDetail.end_date}</span>
                    </p>}
                {/*{*/}
                {/*    animeDetail.start_season.season && animeDetail.start_season.year &&*/}
                {/*    <p>Premiered: <span*/}
                {/*    className="value">{animeDetail.start_season.season.toUpperCase()} {animeDetail.start_season.year}</span>*/}
                {/*</p>}*/}
                {animeDetail.broadcast && animeDetail.broadcast.day_of_the_week && animeDetail.broadcast.start_time &&
                    <p>Broadcast: <span
                        className="value">{animeDetail.broadcast.day_of_the_week} at {animeDetail.broadcast.start_time} (JST)</span>
                    </p>}
                {animeDetail.studios &&
                    <p>Studios: <span className="value">{animeDetail.studios.map(res => `${res.name} `)}</span>
                    </p>}
                {animeDetail.rating && <p>Rating: <span className="value">{animeDetail.rating}</span></p>}
                {animeDetail.source && <p>Source: <span className="value">{animeDetail.source}</span></p>}
                {animeDetail.genres &&
                    <p>Genres: <span className="value">{animeDetail.genres.map(res => `${res.name} `)}</span>
                    </p>}
                {animeDetail.average_episode_duration && <p>Duration: <span
                    className="value">{Math.round(animeDetail.average_episode_duration / 60)} min. per ep</span>
                </p>}
            </div>
        </>
    );
};

export default AnimeMangaDetailInformation;