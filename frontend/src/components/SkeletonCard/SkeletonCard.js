import Skeleton from "react-loading-skeleton";

import './SkeletonCard.css';


const SkeletonCard = () => {
    return (
        <div className={'skeleton-card'}>
            <Skeleton height={"100%"}/>
        </div>
    );
};

export default SkeletonCard;