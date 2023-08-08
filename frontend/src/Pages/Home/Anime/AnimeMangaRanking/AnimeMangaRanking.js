import React from "react";
import {useEffect, useRef,} from "react";

import {Navigation} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {useNavigate, useParams} from "react-router-dom";

import Card from "../../../../shared/Card/Card";

import {getCategoryList} from "../../../../api";
import {AnimeActions} from "../../../../store/anime";
import {categoryType} from "../../../../common";
import SkeletonCard from "../../../../shared/SkeletonCard/SkeletonCard";



const AnimeMangaRanking = (props) => {
    const swiperRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const slug = props.rank.slug;
    const animeData = useSelector(state => state.anime.animeRankData[slug]);

    const mangaData = useSelector(state => state.anime.mangaRankData[slug]);


    const {category} = useParams();




    useEffect(() => {
        getCategoryList(category, props.rank.slug, 10).then(result => {
            dispatch(AnimeActions.saveData({category: category, slug: props.rank.slug, data: result.data}))
        });
    }, [category, props.rank.slug, dispatch]);

    return (
        <div className="ranking" style={props.style} >
            <span className="ranking-type">
                <span className="ranking-name">{props.rank.title}</span>
                <div className="navigation-box">
                    <div className="navigation-buttons">
                        <button style={{cursor:'pointer'}} className="prev-button" onClick={() => swiperRef.current?.slidePrev()}>{"<"}</button>
                        <button style={{cursor:'pointer'}} className="next-button" onClick={() => swiperRef.current?.slideNext()}>{">"}</button>
                    </div>
                    <span style={{cursor:'pointer'}} className="see-all" onClick={() => navigate(`/home/${category}/category/${props.rank.slug}`)}> See all > </span>
                </div>
            </span>
            <div className="ranking-cards" >
                <Swiper
                    spaceBetween={75}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        360: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        550: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1400: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        }
                    }}
                    slidesPerView={5}
                >
                    {
                        (category === categoryType[0].toLowerCase() ? animeData : mangaData) &&
                        (category === categoryType[0].toLowerCase() ? animeData : mangaData).map(res =>
                            <SwiperSlide>
                                <div className="card-container">
                                    <Card detail={res.node} titleSize={`1rem`} genresSize={`0.85rem`}/>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    {
                        ((!animeData && !mangaData)) && Array(6).fill(null).map(()=><SwiperSlide>
                            <div className="card-container">
                                <SkeletonCard/>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
};

export default React.memo(AnimeMangaRanking);