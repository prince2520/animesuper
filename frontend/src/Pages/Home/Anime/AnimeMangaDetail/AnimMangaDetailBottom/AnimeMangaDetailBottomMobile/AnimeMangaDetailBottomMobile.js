import AnimeMangaDetailInformation from "../../AnimeMangaDetailInformation/AnimeMangaDetailInformation";
import AnimeDetailOverview from "../../AnimeMangaDetailOverview/AnimeDetailOverview";
import AnimeMangaDetailRelated from "../../AnimeMangaDetailRelated/AnimeMangaDetailRelated";
import {detail_links} from "../AnimeMangaDetailBottom";
import {useState} from "react";

import './AnimeMangaDetailBottomMobile.css';
import {Icon} from "@iconify/react";

const  AnimeMangaDetailBottomMobile = ({ animeDetail, category}) => {
    const [selectedLink, setSelectedLink] = useState(detail_links[0]);

    return (
        <div className='anime-detail-bottom-mobile'>
            <div className="anime-detail-bottom-mobile-top">
                <div className="anime-detail-bottom-mobile-title">
                    {animeDetail?.title}
                </div>
                <div className="rating"><Icon color="yellow" style={{fontSize: '1.5rem'}}
                                               icon="material-symbols:star"/><span>{animeDetail?.mean}</span></div>
            </div>
            <div className="anime-detail-bottom-mobile-btn-container">
                {animeDetail?.media_type && <span>{animeDetail.media_type.toUpperCase()}</span>}
                {animeDetail?.num_episodes &&
                    <span>{animeDetail?.num_episodes + ' Episodes'}</span>}
                {animeDetail?.num_chapters &&
                    <span>{animeDetail?.num_chapters + ' Chapters'}</span>}
                {animeDetail?.status && <span>{animeDetail.status}</span>}
            </div>
            <div className="detail-links">
                {detail_links.map(links => <span className={`detail-link ${selectedLink===links && 'selected'}`} onClick={()=>setSelectedLink(links)}>{links}</span>)}
            </div>
            {(selectedLink === detail_links[0]) && <div className="anime-detail-bottom-left">
                <AnimeMangaDetailInformation animeDetail={animeDetail}/>
            </div>}
            <div className="anime-detail-bottom-right">
                {(selectedLink === detail_links[1]) && <AnimeDetailOverview animeDetail={animeDetail}/>}
                {(selectedLink === detail_links[2]) && <AnimeMangaDetailRelated animeDetail={animeDetail} category={category}/>}
            </div>
        </div>
    );
};

export default AnimeMangaDetailBottomMobile;