import React, {useContext, useEffect, useState} from "react";

import {useInView} from 'react-intersection-observer';
import {useDispatch, useSelector} from "react-redux";

import NoData from "../NoData/NoData";
import AuthContext from "../../../../Context/auth";
import ChangeCategory from "../../../../shared/ChangeCategory/ChangeCategory";

import {getMyWatchlist} from "../../../../api";
import {helperActions} from "../../../../store/helper";
import {animeStatus, mangaStatus, MyWatchlistActions} from "../../../../store/myWatchlist";
import {categoryType} from "../../../../common";
import {MyWatchlistImage} from "../../../../photo";

import './MyWatchlist.css';
import MyWatchlistHeading from "./MyWatchlistHeading/MyWatchlistHeading";
import MyWatchlistItem from "./MyWatchlistItem/MyWatchlistItem";
import MyWatchlistColorStatus from "./MyWatchlistColorStatus/MyWatchlistColorStatus";

import '../MyFavoriteWatchlist.css'

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

    useEffect(() => {
        dispatch(helperActions.searchBarHandler(false));
        dispatch(helperActions.blurNavbarHandler(!inView));

        return () => {
            dispatch(helperActions.searchBarHandler(true));
            dispatch(helperActions.blurNavbarHandler(true));
        }
    }, [inView, dispatch]);


    useEffect(() => {
        getMyWatchlist(authCtx.email).then(result => {
            dispatch(MyWatchlistActions.saveMyWatchlistData(result.Data))
        });
        return () => {
            dispatch(MyWatchlistActions.currentStatus({currStatus: animeStatus[0], selectedCategory: 'anime'}));
        }
    }, [authCtx.email, dispatch]);


    return (
        <div className="my-watchlist-page">
            <div className="my-watchlist-img-container" ref={ref}>
                <div>My Watchlist</div>
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
                    }} style={{cursor:'pointer'}} className={`${statusFilter === res ? 'selected' : ''}`}>{res}</span>)}
                </div>
                <MyWatchlistColorStatus/>
            </div>
            <div className="my-watchlist-table">
                <MyWatchlistHeading/>
                <div className="my-watchlist-table-list">
                    {filterData.length === 0 && <NoData/>}
                    {filterData && filterData.map((res, index) =><MyWatchlistItem res={res} index={index}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyWatchlist;