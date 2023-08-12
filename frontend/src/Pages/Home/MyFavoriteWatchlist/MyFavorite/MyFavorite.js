import React, {useContext, useEffect, useState} from "react";


import {useDispatch, useSelector} from "react-redux";
import {useInView} from "react-intersection-observer";

import NoData from "../NoData/NoData";
import AuthContext from "../../../../Context/auth";
import ChangeCategory from "../../../../shared/ChangeCategory/ChangeCategory";

import {helperActions} from "../../../../store/helper";
import {getFavoriteList} from "../../../../api/favorite";
import {MyFavoriteActions} from "../../../../store/myFavorite";
import {MyFavoriteImage} from "../../../../photo";

import MyFavoriteHeading from "./MyFavoriteHeading/MyFavoriteHeading";
import MyFavoriteItem from "./MyFavoriteItem/MyFavoriteItem";

import './MyFavorite.css';
import '../MyFavoriteWatchlist.css';
import MyFavoriteWatchlistItemSkeleton from "../MyFavoriteWatchlistItemSkeleton/MyWatchlistItemSkeleton";

const MyFavorite = () => {
    const dispatch = useDispatch();
    const favoriteData = useSelector(state => state.myFavorite.filterData);
    const authCtx = useContext(AuthContext);
    const [showFavoriteSkeleton, setShowFavoriteSkeleton] = useState(false);


    const {ref, inView} = useInView({
        threshold: 0.8,
        delay: 200
    });


    useEffect(() => {
        dispatch(helperActions.searchBarHandler(false));
        dispatch(helperActions.blurNavbarHandler(!inView));

        return () => {
            dispatch(helperActions.searchBarHandler(true));
            dispatch(helperActions.blurNavbarHandler(true));
        }
    }, [inView, dispatch]);

    useEffect(() => {
        setShowFavoriteSkeleton(true);

        getFavoriteList(authCtx?.email).then(result => {
            setShowFavoriteSkeleton(false);
            dispatch(MyFavoriteActions.saveMyFavoriteData(result.Data))
        }).catch(err => {
            setShowFavoriteSkeleton(false);
        });

    }, [authCtx?.email, dispatch])


    return (
        <div className="favorite-page">
            <div className="favorite-img-container" ref={ref}>
                <div>My Favorite</div>
                <img alt='my_favorite' src={MyFavoriteImage}/>
            </div>
            <div className='anime-status'>
                <ChangeCategory eventHandler={(name) => {
                    dispatch(MyFavoriteActions.changeDataCategory(name))
                }}/>
            </div>
            <div className="favorite-table">
                <MyFavoriteHeading/>
                <div className="favorite-table-list">
                    {(!showFavoriteSkeleton && favoriteData.length === 0) && <NoData/>}
                    {favoriteData.map((res, id) =>
                        <MyFavoriteItem res={res} id={id}/>
                    )}
                    {(showFavoriteSkeleton && favoriteData.length === 0) && Array(5).fill(null).map((res, id) => <MyFavoriteWatchlistItemSkeleton/>)}
                </div>
            </div>
        </div>
    );
};

export default React.memo(MyFavorite);