import {Icon} from "@iconify/react";

import Button from "../../../../../shared/Button/Button";
import Skeleton from "react-loading-skeleton";
const AnimeMangaTop = ({animeDetail, addToFavoriteHandler, addToWatchListHandler}) => {

    return (
        <div className="anime-detail-top">
            <div className="anime-detail-top-content">
                <div className="anime-detail-top-left">
                    {animeDetail.main_picture && <img src={animeDetail.main_picture.large } alt="main"/>}
                    <div className="anime-detail-top-left-content">
                        <div className="rating-favorite-container">
                                <span className="rating"><Icon color="yellow" style={{fontSize: '1.5rem'}}
                                                               icon="material-symbols:star"/> {animeDetail.mean || <Skeleton/>}</span>
                            <span  onClick={() => addToFavoriteHandler()} style={{zIndex: '100', cursor:'pointer'}} className="favorite"><Icon color="gray" style={{
                                fontSize: '2.25rem',
                                opacity: "0.7"
                            }} icon="mdi:heart"/></span>
                        </div>
                        <div onClick={
                            () => addToWatchListHandler()}>
                            <Button title="Add to Watchlist"/>
                        </div>
                    </div>
                </div>
                <div className="anime-detail-top-right">
                    <div className="title">
                        {animeDetail.title||<Skeleton/>}
                    </div>
                    <div className="rating-popularity-container">
                        <span className="rating">Rating # {animeDetail.rank || <Skeleton/>}</span>
                        <span className="popularity">Popularity # {animeDetail.popularity || <Skeleton/>}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeMangaTop;