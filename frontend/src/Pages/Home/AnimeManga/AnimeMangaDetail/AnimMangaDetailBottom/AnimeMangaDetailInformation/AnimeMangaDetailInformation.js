import Skeleton from "react-loading-skeleton";

import './AnimeMangaDetailInformation.css'
const AnimeMangaDetailInformation = ({animeDetail}) => {
    return(
        <>
            <div className="heading information-heading">Information</div>
            <div className="information">
                {!animeDetail && <Skeleton count={5} width={'80%'}/> }
                {animeDetail?.media_type ?
                    <p>Type: <span className="value">{animeDetail.media_type.toUpperCase()}</span></p> : null}
                {animeDetail?.num_episodes ?
                    <p>Episodes: <span className="value">{animeDetail.num_episodes}</span></p> : null}
                {animeDetail?.status ? <p>Status: <span className="value">{animeDetail.status}</span></p> : null}
                {(animeDetail?.start_date && animeDetail.end_date) ?
                    <p>Aired: <span className="value">{animeDetail.start_date} to {animeDetail.end_date}</span></p> : null }
                {(animeDetail?.broadcast && animeDetail?.broadcast.day_of_the_week && animeDetail?.broadcast.start_time ) ?
                    <p>Broadcast: <span
                        className="value">{animeDetail?.broadcast.day_of_the_week} at {animeDetail?.broadcast.start_time} (JST)</span>
                    </p> : null}
                {(animeDetail?.studios && animeDetail?.studios.length && (animeDetail?.studios.length > 0)) ?
                    <p>Studios: <span className="value">{animeDetail.studios.map(res => `${res.name} `)}</span>
                    </p>:null}
                {animeDetail?.rating ? <p>Rating: <span className="value">{animeDetail.rating}</span></p> : null}
                {animeDetail?.source ? <p>Source: <span className="value">{animeDetail.source}</span></p> : null}
                {(animeDetail?.genres.length > 0) ?
                    <p>Genres: <span className="value">{animeDetail.genres.map(res => `${res.name} `)}</span></p> : null}
                {animeDetail?.average_episode_duration ? <p>Duration: <span
                    className="value">{Math.round(animeDetail.average_episode_duration / 60)} min. per ep</span>
                </p> : null}
            </div>
        </>
    );
};

export default AnimeMangaDetailInformation;