import { uid } from "uid";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import NoData from "../NoData/NoData";
import MyFavoriteData from './MyFavoriteData.json';
import MyFavoriteItem from "./MyFavoriteItem/MyFavoriteItem";
import ChangeCategory from "../../../../components/ChangeCategory/ChangeCategory";
import FavoriteWatchlistSkeleton from "../FavoriteWatchlistSkeleton/FavoriteWatchlistSkeleton";

import { MyFavoriteImage } from "../../../../photo";
import { helperActions } from "../../../../redux/slice/helperSlice";
import { getFavoriteListThunk } from "../../../../redux/thunk/myFavoriteThunk";

import './MyFavorite.css';
import '../MyFavoriteWatchlist.css';

// Sub Component
const Heading = () => {
    return (
        <div className="favorite-table-heading">
            {MyFavoriteData.headings.map(heading => <h5 key={uid(8)} className="color-text" style={{ width: heading.width }}>{heading.title}</h5>)}
        </div>
    );
};


const MyFavorite = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.myFavorite.favorite);
    const [showFavoriteSkeleton, setShowFavoriteSkeleton] = useState(false);
    const { category } = useParams();
    const navigate = useNavigate();


    const { ref, inView } = useInView({
        threshold: 0.8,
        delay: 200
    });


    useEffect(() => {
        dispatch(helperActions.searchBarReducer(false));
        dispatch(helperActions.blurNavbarReducer(!inView));

        return () => {
            dispatch(helperActions.searchBarReducer(true));
            dispatch(helperActions.blurNavbarReducer(true));
        }
    }, [inView, dispatch]);

    useEffect(() => {
        setShowFavoriteSkeleton(true);
        dispatch(getFavoriteListThunk()).finally(() => setShowFavoriteSkeleton(false));
    }, [])


    return (
        <div className="favorite-page">
            <div className="favorite-img-container" ref={ref}>
                <h2>My Favorite</h2>
                <img alt='my_favorite' src={MyFavoriteImage} />
            </div>
            <div className='anime-status'>
                <ChangeCategory eventHandler={(name) => navigate(`/home/my-favorite/${name.toLowerCase()}`)} />
            </div>
            <div className="favorite-table">
                <Heading />
                <div className="favorite-table-list">
                    {(!showFavoriteSkeleton && !favorite[category].length) && <NoData />}
                    {(favorite[category]).map((item, idx) =>
                        <MyFavoriteItem key={uid(8)} item={item} idx={idx} />
                    )}
                    {(showFavoriteSkeleton && !favorite[category].length) && Array(5).fill(null).map(() => <FavoriteWatchlistSkeleton key={uid(8)} />)}
                </div>
            </div>
        </div>
    );
};

export default React.memo(MyFavorite);