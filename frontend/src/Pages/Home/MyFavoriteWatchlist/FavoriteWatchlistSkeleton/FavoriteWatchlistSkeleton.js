import Skeleton from "react-loading-skeleton";

import './FavoriteWatchlistSkeleton.css';

const FavoriteWatchlistSkeleton = () => {
    return (
        <div className={'favorite-watchlist-skeleton'}>
            <Skeleton width={"100%"} height={"100%"}/>
        </div>
    )
};

export default FavoriteWatchlistSkeleton;