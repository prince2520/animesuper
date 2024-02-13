import React from "react";

import Card from "../../../../../components/Card/Card";

const AnimeMangaRecommendation = ({animeDetail}) => {
    return (
        <div className="recommendation">
            <h3>Recommendation for you</h3>
            <div className="flex-center recommendation-container">
                {animeDetail?.recommendations.length > 0 ?
                    animeDetail.recommendations.map(res =>
                        <div className={'card-container'}>
                            <Card isRecommemdation={true} detail={res.node}/>
                        </div>) : <p style={{width:'100%'}}>No recommendations found!</p>}
            </div>
        </div>
    );
};

export default React.memo(AnimeMangaRecommendation);