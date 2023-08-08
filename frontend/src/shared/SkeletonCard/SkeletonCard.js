import './SkeletonCard.css';
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
    return (
        <div className={'skeleton-card'}>
            <Skeleton height={"100%"}/>
        </div>
    );
};

export default SkeletonCard;