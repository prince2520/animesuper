import React from "react";
import { uid } from "uid";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import AnimeCarouselSlide from "./AnimeMangaCarouselSlide/AnimeMangaCarouselSlide";

import {carousel } from "../../../../photo";

import "swiper/swiper-bundle.css";
import "./AnimeMangaCarousel.css";

const AnimeMangaCarousel = () => {
  const { category } = useParams();

  SwiperCore.use([Autoplay, Pagination]);

  return (
    <React.Fragment>
      <div className="anime-carousel">
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, type: "bullets" }}
        >
          {carousel[category].map((data) => (
            <SwiperSlide key={uid(8)}>
              <AnimeCarouselSlide
                data={data}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default React.memo(AnimeMangaCarousel);
