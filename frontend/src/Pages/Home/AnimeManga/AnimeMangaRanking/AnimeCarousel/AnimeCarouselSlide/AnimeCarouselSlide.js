import React, {useEffect} from "react";

import {Icon} from "@iconify/react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Skeleton from "react-loading-skeleton";

import Button from "../../../../../../shared/Button/Button";

import {AnimeActions} from "../../../../../../store/anime";
import {getAnimeDetail} from "../../../../../../api/animeManga";

import './AnimeCarouselSlide.css';

const AnimeCarouselSlide = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const animeMangaCarouselData = useSelector(state => state.anime.animeMangaCarouselData[props.category_id]);

    useEffect(() => {
        getAnimeDetail(props.category, props.category_id).then(res => {
            dispatch(AnimeActions.saveCarouselData({
                id : res.id,
                category: props.category,
                title: res.title,
                synopsis: res.synopsis,
                media_type: res.media_type,
                average_episode_duration: res.average_episode_duration,
                start_date: res.start_date
            }));
        })
    }, [props.category, props.category_id, dispatch])

    return (
        <div>
            <div className="img-overlay">
                 <div className="content">

                     <div className="title">
                        {animeMangaCarouselData?.title.slice(0, 250) || <Skeleton width={"80%"} count={1}/>}
                    </div>

                    <div className="synopsis">
                        {animeMangaCarouselData?.synopsis.slice(0, 250) || <Skeleton count={3}/>}
                        {animeMangaCarouselData?.synopsis && "..."}
                    </div>

                    <div className="more-info">

                        {animeMangaCarouselData?.media_type && <div className="type">
                            <span><Icon
                                style={{fontSize: 'inherit'}}
                                icon="material-symbols:play-circle-outline-rounded"/></span>
                            <span>{animeMangaCarouselData?.media_type.toUpperCase()}</span>
                        </div>}
                        {!animeMangaCarouselData?.media_type && <Skeleton width={60} height={22}/>}

                        {animeMangaCarouselData?.average_episode_duration && <div className="duration">
                            <span><Icon style={{fontSize: 'inherit'}} icon="mdi:clock-time-three-outline"/></span>
                            {`${Math.round(animeMangaCarouselData?.average_episode_duration / 60)}m`}
                        </div>}

                        {animeMangaCarouselData?.start_date && <div className="release-date">
                            <span>
                                <Icon style={{fontSize: 'inherit'}} icon="simple-line-icons:calender"/>
                            </span>
                            <span>{animeMangaCarouselData?.start_date}</span>
                        </div>}
                        {!animeMangaCarouselData?.start_date && <Skeleton width={60} height={22}/>}
                    </div>

                    <div className="detail" onClick={()=>navigate(`${props.category_id}`)}>
                        <Button title="Detail"/>
                    </div>

                </div>
            </div>
            <img src={props.coverImg} alt="cyberpunk"/>
        </div>
    );
};

export default AnimeCarouselSlide;