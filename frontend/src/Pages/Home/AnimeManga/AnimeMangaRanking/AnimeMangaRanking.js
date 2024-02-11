import React from "react";
import { useEffect, useRef } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { categoryType } from "../../../../common";
import { AnimeActions } from "../../../../store/anime";
import { getCategoryList } from "../../../../api/animeManga";

import Card from "../../../../components/Card/Card";
import SkeletonCard from "../../../../components/SkeletonCard/SkeletonCard";

const AnimeMangaRanking = (props) => {
  const swiperRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();
  
  const slug = props.rank.slug;
  const animeData = useSelector((state) => state.anime.animeRankData[slug]);
  const mangaData = useSelector((state) => state.anime.mangaRankData[slug]);


  useEffect(() => {
    getCategoryList(category, props.rank.slug, 10).then((result) => {
      dispatch(
        AnimeActions.saveData({
          category: category,
          slug: props.rank.slug,
          data: result.data,
        })
      );
    });
  }, [category, props.rank.slug, dispatch]);

  return (
    <div className="ranking" style={props.style}>
      <div className="ranking-type" style={{ marginBottom: "0.75rem" }}>
        <h3 className="ranking-name">{props.rank.title}</h3>
        <div className="navigation-box">
          <div className="navigation-buttons">
            {["<", ">"].map((data) => (
              <button
                style={{ cursor: "pointer" }}
                className={data === "<" ? `prev-button` : `next-button`}
                onClick={() =>
                  data === "<"
                    ? swiperRef.current?.slidePrev()
                    : swiperRef.current?.slideNext()
                }
              >
                <span>{data}</span>
              </button>
            ))}
          </div>
          <h5
            className="highlight cursor-btn"
            onClick={() =>
              navigate(`/home/${category}/category/${props.rank.slug}`)
            }
          >
            {" "}
            See all >{" "}
          </h5>
        </div>
      </div>
      <div className="ranking-cards">
        <Swiper
          spaceBetween={75}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
          slidesPerView={6}
        >
          {(category === categoryType[0].toLowerCase()
            ? animeData
            : mangaData) &&
            (category === categoryType[0].toLowerCase()
              ? animeData
              : mangaData
            ).map((res) => (
              <SwiperSlide>
                <div className="card-container">
                  <Card detail={res.node} />
                </div>
              </SwiperSlide>
            ))}
          {!animeData &&
            !mangaData &&
            Array(6)
              .fill(null)
              .map(() => (
                <SwiperSlide>
                  <div className="card-container">
                    <SkeletonCard />
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default React.memo(AnimeMangaRanking);
