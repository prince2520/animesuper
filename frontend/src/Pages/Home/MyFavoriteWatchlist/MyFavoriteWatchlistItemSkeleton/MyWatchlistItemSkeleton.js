import './MyWatchlistItemSkeleton.css'
import Skeleton from "react-loading-skeleton";
const MyFavoriteWatchlistItemSkeleton = () => {
    return (
        <div className={'my-favorite-watchlist-table-item-skeleton'}>
            <Skeleton width={"100%"} height={"100%"}/>
        </div>
    )
};

export default MyFavoriteWatchlistItemSkeleton;