import React from "react";

import AnimeDetailOverview from "./AnimeDetailOverview";
import AnimeMangaDetailRelated from "./AnimeMangaDetailRelated";
import AnimeMangaRecommendation from "./AnimeMangaRecommendation";
import AnimeMangaDetailInformation from "./AnimeMangaDetailInformation";
import AnimeMangaDetailBottomMobile from "./AnimeMangaDetailBottomMobile/AnimeMangaDetailBottomMobile";

import "./AnimeMangaDetailBottom.css";

const AnimeMangaDetailBottom = ({ animeDetail, category }) => {
  return (
    <div className="flex-center anime-detail-bottom">
      <div className="anime-detail-bottom-web">
        <div className="anime-detail-bottom-left">
          <AnimeMangaDetailInformation animeDetail={animeDetail} />
        </div>
        <div className="flex-center anime-detail-bottom-right">
          <AnimeDetailOverview animeDetail={animeDetail} />
          <AnimeMangaDetailRelated
            showRelated={false}
            animeDetail={animeDetail}
            category={category}
          />
        </div>
      </div>
      <AnimeMangaDetailBottomMobile
        animeDetail={animeDetail}
        category={category}
      />
      <AnimeMangaRecommendation animeDetail={animeDetail} category={category} />
    </div>
  );
};
export default AnimeMangaDetailBottom;
