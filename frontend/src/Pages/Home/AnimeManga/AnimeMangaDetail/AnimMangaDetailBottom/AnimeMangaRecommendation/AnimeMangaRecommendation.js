import React from "react";
import Card from "../../../../../../shared/Card/Card";

const AnimeMangaRecommendation = ({animeDetail}) => {
    return (
        <div className="recommendation">
            <span className="heading">Recommendation for you</span>
            <div className="recommendation-container">
                {animeDetail?.recommendations.length > 0 ?
                    animeDetail.recommendations.map(res =>
                        <div className={'card-container'}>
                            <Card isRecommemdation={true} detail={res.node}/>
                        </div>) : <p style={{color: 'var(--text-extra-light)'}}>No recommendations found!</p>}
            </div>
        </div>
    );
};

export default React.memo(AnimeMangaRecommendation);