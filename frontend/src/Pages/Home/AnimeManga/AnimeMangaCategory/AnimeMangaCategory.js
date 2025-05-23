import { uid } from "uid";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Card from "../../../../components/Card/Card";
import SkeletonCard from "../../../../components/SkeletonCard/SkeletonCard";
import PrevNextButton from "../../../../components/PrevNextBtn/PrevNextBtn";

import { getCategoryListAPI } from "../../../../redux/api/animeMangaAPI";
import { animeCategory, categoryType, mangaCategory } from "../../../../constants/constants";

import "./AnimeMangaCategory.css";

const AnimeMangaCategory = () => {
  const [animeManga, setAnimeManga] = useState([]);
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();
  const { category, id } = useParams();

  const updateAnimeMangaCategory = (value = 0, firstMount = false) => {
    let total = (firstMount ? 0 : offset) + value
    if (offset + value >= 0) {
      setAnimeManga([]);
      getCategoryListAPI(category, id, 20, total)
        .then((result) => {
          setAnimeManga(result.data.data);
          setOffset(total);
        });
    }
  };

  useEffect(() => {
    updateAnimeMangaCategory(0, true);
  }, [category, id]);

  //Title of anime/manga category
  const categoryTitle = (
    category === categoryType[0].toLowerCase() ? animeCategory : mangaCategory
  ).filter((name) => {
    return name.slug === id;
  })[0].title;

  return (
    <div className="anime-manga-category-page">
      <div className="route">
        <h3 className="color-text-light">
          Category > Anime >
          <span style={{ color: "var(--text)" }}> {categoryTitle}</span>
        </h3>
      </div>

      <div className="flex-center anime-manga-filter">
        <h5>Filter</h5>
        <Icon
          icon="material-symbols:filter-alt-outline-sharp"
          style={{ fontSize: "1.5rem", color: "var(--text-extra-light)" }}
        />
      </div>

      <div className="anime-manga-filter-container">
        {(category === categoryType[0].toLowerCase()
          ? animeCategory
          : mangaCategory
        ).map((res) => (
          <h5
            key={uid(8)}
            onClick={() => navigate(`/home/${category}/category/${res.slug}`)}
            className={`anime-manga-filter-button cursor-btn ${id === res.slug ? "selected" : ""
              }`}
          >
            {res.title}
          </h5>
        ))}
      </div>

      <div className="anime-manga-category-cards">
        {animeManga.map((res) => (
          <div className="card-container" key={uid(8)}>
            <Card detail={res.node} />
          </div>
        ))}
        {animeManga.length === 0 &&
          Array(20)
            .fill(null)
            .map((res, index) => (
              <div className="card-container" key={uid(8)}>
                <SkeletonCard />
              </div>
            ))}
      </div>
      <PrevNextButton updateAnimeMangaCategory={updateAnimeMangaCategory} />
    </div>
  );
};

export default React.memo(AnimeMangaCategory);
