import AnimeDetailOverview from "./AnimeMangaDetailOverview/AnimeDetailOverview";
import AnimeMangaDetailRelated from "./AnimeMangaDetailRelated/AnimeMangaDetailRelated";
import AnimeMangaRecommendation from "./AnimeMangaRecommendation/AnimeMangaRecommendation";
import AnimeMangaDetailInformation from "./AnimeMangaDetailInformation/AnimeMangaDetailInformation";
import AnimeMangaDetailBottomMobile from "./AnimeMangaDetailBottomMobile/AnimeMangaDetailBottomMobile";

import './AnimeMangaDetailBottom.css';

const AnimeMangaDetailBottom = ({animeDetail, category}) => {

    return (
        <div className="anime-detail-bottom">
            <div className='anime-detail-bottom-web'>
                <div className="anime-detail-bottom-left">
                    <AnimeMangaDetailInformation animeDetail={animeDetail}/>
                </div>
                <div className="anime-detail-bottom-right">
                    <AnimeDetailOverview animeDetail={animeDetail}/>
                    <AnimeMangaDetailRelated animeDetail={animeDetail} category={category}/>
                </div>
            </div>
            <AnimeMangaDetailBottomMobile animeDetail={animeDetail} category={category}/>
            <AnimeMangaRecommendation animeDetail={animeDetail} category={category}/>

        </div>

    );
};
export default AnimeMangaDetailBottom;
