import React, {useContext, useEffect, useState} from "react";

import {useInView} from 'react-intersection-observer';
import {useDispatch, useSelector} from "react-redux";

import NoData from "../NoData/NoData";
import AuthContext from "../../../../Context/auth";
import ChangeCategory from "../../../../components/ChangeCategory/ChangeCategory";

import { watchlistHeadings, watchlistColors } from "./watchlist";
import {getMyWatchlist} from "../../../../api/watchlist";
import {helperActions} from "../../../../store/helper";
import {MyWatchlistActions} from "../../../../store/myWatchlist";
import {categoryType} from "../../../../common";
import {animeStatus,mangaStatus} from "../../../../common";
import {MyWatchlistImage} from "../../../../photo";

import MyWatchlistItem from "./MyWatchlistItem/MyWatchlistItem";
import MyWatchlistItemSkeleton from "../FavoriteWatchlistSkeleton/FavoriteWatchlistSkeleton";

import '../MyFavoriteWatchlist.css';
import './MyWatchlist.css';


// Sub Components

const Heading = () => {
    return (
        <div className="my-watchlist-table-heading">
            {watchlistHeadings.map(heading=><h5 className="color-text" style={{width: heading.width}}>{heading.title}</h5>)}
        </div>
    );
};

const ColorStatus = () => {
    return (
        <div className="anime-status-color">
            {watchlistColors.map(data=>{
                return (
                    <div className={`${data.className} color-title`}>
                        <span className="circle"/>
                        <h6>{data.title}</h6>
                    </div>
                );
            })}
        </div>
    );
};


// Main Component
const MyWatchlist = () => {
    const {ref, inView} = useInView({
        threshold: 0.8,
        delay: 200,
    });

    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);
    const filterData = useSelector(state => state.myWatchlist.filterData);
    const statusFilter = useSelector(state => state.myWatchlist.currStatus);
    const [selectedCategory, setSelectedCategory] = useState('Anime');

    const [showWatchlistSkeleton, setShowWatchlistSkeleton] = useState(false);

    useEffect(() => {
        dispatch(helperActions.searchBarHandler(false));
        dispatch(helperActions.blurNavbarHandler(!inView));

        return () => {
            dispatch(helperActions.searchBarHandler(true));
            dispatch(helperActions.blurNavbarHandler(true));
        }
    }, [inView, dispatch]);


    useEffect(() => {
        setShowWatchlistSkeleton(true);

        getMyWatchlist(authCtx.email).then(result => {
            dispatch(MyWatchlistActions.saveMyWatchlistData(result.Data));
            setShowWatchlistSkeleton(false);
        }).catch(err=>setShowWatchlistSkeleton(false));

        return () => {
            dispatch(MyWatchlistActions.currentStatus({currStatus: animeStatus[0], selectedCategory: 'anime'}));
        }
    }, [authCtx?.email, dispatch]);


    return (
        <div className="my-watchlist-page">
            <div className="my-watchlist-img-container" ref={ref}>
                <h2>My Watchlist</h2>
                <img src={MyWatchlistImage} alt='my-watchlist'/>
            </div>
            <div className="anime-status">
                <ChangeCategory eventHandler={(name) => {
                    setSelectedCategory(name)
                    dispatch(MyWatchlistActions.changeCategory(name))
                }}/>
                <div className="anime-status-list">
                    {(selectedCategory === categoryType[0] ? animeStatus : mangaStatus).map(res => <span onClick={() => {
                        dispatch(MyWatchlistActions.currentStatus({
                            currStatus: res,
                            selectedCategory: selectedCategory
                        }));
                    }} style={{cursor:'pointer'}} className={`${statusFilter === res ? 'selected' : ''}`}><h5>{res}</h5></span>)}
                </div>
                <ColorStatus/>
            </div>
            <div className="my-watchlist-table">
                <Heading/>
                <div className="my-watchlist-table-list">
                    {!showWatchlistSkeleton && (filterData.length === 0) && <NoData/>}
                    {filterData.map((res, index) =><MyWatchlistItem res={res} index={index}/>)}
                    {(showWatchlistSkeleton && filterData.length === 0 ) && Array(5).fill(null).map(()=><MyWatchlistItemSkeleton/>)}
                </div>
            </div>
        </div>
    );
}

export default React.memo(MyWatchlist);