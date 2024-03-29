import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { helperActions } from "../../../store/helper";
import { animeCategory, categoryType, mangaCategory } from "../../../constants/constants";

import AnimeMangaCarousel from "./AnimeMangaCarousel/AnimeMangaCarousel";
import AnimeMangaRanking from "./AnimeMangaRanking/AnimeMangaRanking";

import "./AnimeManga.css";

const AnimeManga = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(helperActions.searchBarHandler(true));
  }, [dispatch]);

  const [ref, inView] = useInView();

  return (
    <div className="anime-page" ref={ref}>
      <AnimeMangaCarousel category={category} />
      <div className=" flex-center anime-manga-ranking-container">
        {(category === categoryType[0].toLowerCase()
          ? animeCategory
          : mangaCategory
        ).map((rank) => {
          return inView ? <AnimeMangaRanking rank={rank} /> : null;
        })}
      </div>
    </div>
  );
};

export default AnimeManga;
