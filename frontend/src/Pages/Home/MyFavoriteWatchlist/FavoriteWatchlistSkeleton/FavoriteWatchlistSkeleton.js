import './FavoriteWatchlistSkeleton.css'

import Skeleton from "react-loading-skeleton";

const FavoriteWatchlistSkeleton = () => {
    return (
        <div className={'favorite-watchlist-skeleton'}>
            <Skeleton width={"100%"} height={"100%"}/>
        </div>
    )
};

export default FavoriteWatchlistSkeleton;