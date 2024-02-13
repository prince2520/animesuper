import { useState } from "react";
import { Icon } from "@iconify/react";

import { detail_links } from "../../../../../../common";

import AnimeDetailOverview from "../AnimeDetailOverview";
import AnimeMangaDetailRelated from "../AnimeMangaDetailRelated";
import AnimeMangaDetailInformation from "../AnimeMangaDetailInformation";

import "./AnimeMangaDetailBottomMobile.css";

const AnimeMangaDetailBottomMobile = ({ animeDetail, category }) => {
  const [selectedLink, setSelectedLink] = useState(detail_links[0]);

  return (
    <div className="anime-detail-bottom-mobile">
      <div className="anime-detail-bottom-mobile-top">
        <h2>
          {animeDetail?.title}
        </h2>
        <div className="flex-center rating">
          <Icon
            color="yellow"
            style={{ fontSize: "1.25rem" }}
            icon="material-symbols:star"
          />
          <p className="color-text">{animeDetail?.mean}</p>
        </div>
      </div>
      <div className="flex-center anime-detail-bottom-mobile-btn-container">
        {animeDetail?.media_type ? (
          <h6>{animeDetail.media_type.toUpperCase()}</h6>
        ) : null}
        {animeDetail?.num_episodes ? (
          <h6>{animeDetail?.num_episodes + " Episodes"}</h6>
        ) : null}
        {animeDetail?.num_chapters ? (
          <h6>{animeDetail?.num_chapters + " Chapters"}</h6>
        ) : null}
        {animeDetail?.status ? <h6>{animeDetail.status}</h6> : null}
      </div>
      <div className="detail-links">
        {detail_links.map((links) => (
          <h4
            className={`detail-link ${selectedLink === links && "selected"}`}
            onClick={() => setSelectedLink(links)}
          >
            {links}
          </h4>
        ))}
      </div>
      {selectedLink === detail_links[0] && (
        <div className="anime-detail-bottom-left">
          <AnimeMangaDetailInformation animeDetail={animeDetail} />
        </div>
      )}
      <div className="anime-detail-bottom-right">
        {selectedLink === detail_links[1] && (
          <AnimeDetailOverview animeDetail={animeDetail} />
        )}
        {selectedLink === detail_links[2] && (
          <AnimeMangaDetailRelated
            showRelated={true}
            animeDetail={animeDetail}
            category={category}
          />
        )}
      </div>
    </div>
  );
};

export default AnimeMangaDetailBottomMobile;
