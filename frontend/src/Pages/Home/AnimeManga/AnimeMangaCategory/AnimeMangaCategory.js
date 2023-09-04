import React, {useEffect, useState} from "react";

import {Icon} from "@iconify/react";
import {useNavigate, useParams} from "react-router-dom";

import Card from "../../../../components/Card/Card";
import SkeletonCard from "../../../../components/SkeletonCard/SkeletonCard";

import {getCategoryList} from "../../../../api/animeManga";
import {animeCategory, categoryType, mangaCategory} from "../../../../common";

import './AnimeMangaCategory.css';

const AnimeMangaCategory = () => {
    const [animeManga, setAnimeManga] = useState([]);

    const navigate = useNavigate();
    const {category, id} = useParams();

    useEffect(() => {
        getCategoryList(category, id, 20).then(result => {
            setAnimeManga(result.data);
        });
    }, [category, id]);

    const title = (category === categoryType[0].toLowerCase() ? animeCategory : mangaCategory).filter(name => {
        return name.slug === id
    })[0].title;


    return (
        <div className="category-page">
            <div
                className="dmca-route">
                Category > Anime ><span style={{color: 'var(--text)'}}> {title}</span>
            </div>
            <div className="filter">
                <span>Filter</span>
                <Icon
                    icon="material-symbols:filter-alt-outline-sharp"
                    style={{fontSize: '1.5rem', color: 'var(--text-extra-light)'}}/>
            </div>
            <div className="filter-container">
                {(category === categoryType[0].toLowerCase() ? animeCategory : mangaCategory).map(res =>
                    <div
                        onClick={() => navigate(`/home/${category}/category/${res.slug}`)}
                        className={`filter-button cursor-btn ${id === res.slug ? 'selected' : ''}`}>{res.title}</div>)}
            </div>
            <div className="category-cards">
                {
                    animeManga.map(res =>
                        <div className="card-container" key={res.node.id}>
                            <Card detail={res.node} titleSize={`0.8rem`} genresSize={`0.75rem`}/>
                        </div>
                    )
                }
                {
                    (animeManga.length === 0) &&
                     Array(20).fill(null).map((res, index) =>
                        <div className="card-container" key={index}>
                            <SkeletonCard/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default React.memo(AnimeMangaCategory);