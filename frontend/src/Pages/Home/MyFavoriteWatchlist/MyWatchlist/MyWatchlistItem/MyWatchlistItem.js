
import React from "react";
import MyWatchlistItemMobile from "./MyWatchlistItemMobile/MyWatchlistItemMobile";
import MyWatchlistItemWeb from "./MyWatchlistItemWeb/MyWatchlistItemWeb";

const MyWatchlistItem = ({res, index}) => {


    return (
        <>
            <MyWatchlistItemWeb res={res} index={index}/>
            <MyWatchlistItemMobile res={res} index={index}/>
        </>
    );
};

export default MyWatchlistItem;