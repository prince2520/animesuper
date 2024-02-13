import React from "react";

import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import { categoryType } from "../../../../common";
import { animeCarousel, mangaCarousel } from "../../../../photo";

import AnimeCarouselSlide from "./AnimeMangaCarouselSlide/AnimeMangaCarouselSlide";

import "swiper/swiper-bundle.css";
import "./AnimeMangaCarousel.css";

const AnimeMangaCarousel = (props) => {
  const { category } = useParams();

  SwiperCore.use([Autoplay, Pagination]);

  return (
    <React.Fragment>
      <div className="anime-carousel">
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, type: "bullets" }}
        >
          {(category === categoryType[0].toLowerCase()
            ? animeCarousel
            : mangaCarousel
          ).map((res) => (
            <SwiperSlide>
              <AnimeCarouselSlide
                category={res.category}
                category_id={res.category_id}
                coverImg={res.coverImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default React.memo(AnimeMangaCarousel);
