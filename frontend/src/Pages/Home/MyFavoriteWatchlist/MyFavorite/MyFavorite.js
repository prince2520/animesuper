import {useDispatch, useSelector} from "react-redux";
import {useInView} from "react-intersection-observer";
import React, {useContext, useEffect, useState} from "react";

import {MyFavoriteImage} from "../../../../photo";
import {helperActions} from "../../../../store/helper";
import {getFavoriteList} from "../../../../api/favorite";
import {MyFavoriteActions} from "../../../../store/myFavorite";

import NoData from "../NoData/NoData";
import AuthContext from "../../../../Context/auth";
import MyFavoriteItem from "./MyFavoriteItem/MyFavoriteItem";
import ChangeCategory from "../../../../components/ChangeCategory/ChangeCategory";
import FavoriteWatchlistSkeleton from "../FavoriteWatchlistSkeleton/FavoriteWatchlistSkeleton";

import MyFavoriteData from './MyFavoriteData.json';

import './MyFavorite.css';
import '../MyFavoriteWatchlist.css';
import { uid } from "uid";


// Sub Component
const Heading = () => {
    return (
        <div className="favorite-table-heading">
            {MyFavoriteData.headings.map(heading => <h5 key={uid(8)} className="color-text" style={{width:heading.width}}>{heading.title}</h5>)}
        </div>
    );
};


const MyFavorite = () => {
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);
    const favoriteData = useSelector(state => state.myFavorite.filterData);
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

        getFavoriteList(authCtx?.email, authCtx.token).then(result => {
            setShowFavoriteSkeleton(false);
            dispatch(MyFavoriteActions.saveMyFavoriteData(result.Data))
        }).catch(err => {
            setShowFavoriteSkeleton(false);
        });

    }, [authCtx?.email, dispatch])


    return (
        <div className="favorite-page">
            <div className="favorite-img-container" ref={ref}>
                <h2>My Favorite</h2>
                <img alt='my_favorite' src={MyFavoriteImage}/>
            </div>
            <div className='anime-status'>
                <ChangeCategory eventHandler={(name) => {dispatch(MyFavoriteActions.changeDataCategory(name))}}/>
            </div>
            <div className="favorite-table">
                <Heading/>
                <div className="favorite-table-list">
                    {(!showFavoriteSkeleton && favoriteData.length === 0) && <NoData/>}
                    {favoriteData.map((res, id) =>
                        <MyFavoriteItem key={uid(8)} res={res} id={id}/>
                    )}
                    {(showFavoriteSkeleton && favoriteData.length === 0) && Array(5).fill(null).map(() => <FavoriteWatchlistSkeleton key={uid(8)}/>)}
                </div>
            </div>
        </div>
    );
};

export default React.memo(MyFavorite);