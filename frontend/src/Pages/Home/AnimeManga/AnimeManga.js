import { uid } from "uid";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import AnimeMangaRanking from "./AnimeMangaRanking/AnimeMangaRanking";
import AnimeMangaCarousel from "./AnimeMangaCarousel/AnimeMangaCarousel";

import { helperActions } from "../../../redux/slice/helperSlice";
import { animeCategory, categoryType, mangaCategory } from "../../../constants/constants";

import "./AnimeManga.css";

const AnimeManga = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(helperActions.searchBarReducer(true));
  }, [dispatch]);

  const [ref, inView] = useInView();

  return (
    <div className="anime-page" ref={ref}>
      <AnimeMangaCarousel/>
      <div className=" flex-center anime-manga-ranking-container">
        {(category === categoryType[0].toLowerCase()
          ? animeCategory
          : mangaCategory
        ).map((rank) => {
          return inView ? <AnimeMangaRanking key={uid(8)} rank={rank} /> : null;
        })}
      </div>
    </div>
  );
};

export default AnimeManga;
