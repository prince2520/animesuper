import React, {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import AnimeCarousel from "./AnimeMangaRanking/AnimeCarousel/AnimeCarousel";
import AnimeMangaRanking from "./AnimeMangaRanking/AnimeMangaRanking";

import {helperActions} from "../../../store/helper";
import {animeCategory, categoryType, mangaCategory} from "../../../common";

import './Anime.css';

const Anime = () => {
    const dispatch = useDispatch();
    const {category} = useParams();

    useEffect(() => {
        dispatch(helperActions.searchBarHandler(true));
    }, [dispatch]);

    return (
        <div className="anime-page">
            <AnimeCarousel category={category}/>
            {(category === categoryType[0].toLowerCase() ? animeCategory : mangaCategory).map(rank => <AnimeMangaRanking rank={rank}/>)}
        </div>
    );
};

export default Anime;
