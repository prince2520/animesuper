import {useState} from "react";
import {Icon} from "@iconify/react";

import {detail_links} from '../../../../../../common';
import AnimeDetailOverview from "../AnimeMangaDetailOverview/AnimeDetailOverview";
import AnimeMangaDetailRelated from "../AnimeMangaDetailRelated/AnimeMangaDetailRelated";
import AnimeMangaDetailInformation from "../AnimeMangaDetailInformation/AnimeMangaDetailInformation";

import './AnimeMangaDetailBottomMobile.css';

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
                {animeDetail?.media_type ? <span>{animeDetail.media_type.toUpperCase()}</span> : null}
                {animeDetail?.num_episodes ?
                    <span>{animeDetail?.num_episodes + ' Episodes'}</span> : null}
                {animeDetail?.num_chapters ?
                    <span>{animeDetail?.num_chapters + ' Chapters'}</span> : null}
                {animeDetail?.status ? <span>{animeDetail.status}</span> : null}
            </div>
            <div className="detail-links">
                {detail_links.map(links => <span className={`detail-link ${selectedLink===links && 'selected'}`} onClick={()=>setSelectedLink(links)}>{links}</span>)}
            </div>
            {(selectedLink === detail_links[0]) && <div className="anime-detail-bottom-left">
                <AnimeMangaDetailInformation animeDetail={animeDetail}/>
            </div>}
            <div className="anime-detail-bottom-right">
                {(selectedLink === detail_links[1]) && <AnimeDetailOverview animeDetail={animeDetail}/>}
                {(selectedLink === detail_links[2]) && <AnimeMangaDetailRelated showRelated={true} animeDetail={animeDetail} category={category}/>}
            </div>
        </div>
    );
};

export default AnimeMangaDetailBottomMobile;