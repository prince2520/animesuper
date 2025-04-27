import { uid } from "uid";
import React from "react";
import { useEffect, useRef } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../../../../components/Card/Card";
import SkeletonCard from "../../../../components/SkeletonCard/SkeletonCard";

import { getCategoryListThunk } from "../../../../redux/thunk/animeMangaThunk";

import "./AnimeMangaRanking.css";


const AnimeMangaRanking = (props) => {
  const swiperRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();

  const slug = props.rank.slug;

  const animeManga = useSelector(state => state.animeManga[category]);

  useEffect(() => {
    dispatch(getCategoryListThunk({ category, rank_type: props.rank.slug, limit: 10, offset: 0 }));
  }, [category, props.rank.slug, dispatch]);


  return (
    <div className="ranking" style={props.style}>
      <div
        className="flex-center ranking-type"
        style={{ marginBottom: "0.75rem" }}
      >
        <h3>{props.rank.title}</h3>
        <div className="navigation-box">
          <div className="navigation-buttons">
            {["<", ">"].map((data) => (
              <button
                key={uid(8)}
                style={{ cursor: "pointer" }}
                className={`flex-center ${data === "<" ? `prev-button` : `next-button`
                  }`}
                onClick={() =>
                  data === "<"
                    ? swiperRef.current?.slidePrev()
                    : swiperRef.current?.slideNext()
                }
              >
                <p className="color-text">{data}</p>
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
              slidesPerView: 2,
              spaceBetween: 5,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            852: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            1100: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 8,
            },
          }}
        >
          {animeManga[slug] && Object.values(animeManga[slug]).map((res) => (
            <SwiperSlide key={uid(8)}>
              <div className="card-container">
                <Card detail={res.node} />
              </div>
            </SwiperSlide>
          ))}
          {!animeManga[slug] &&
            Array(6)
              .fill(null)
              .map(() => (
                <SwiperSlide key={uid(8)}>
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
