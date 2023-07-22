import React from "react";
import MyFavoriteItemWeb from "./MyFavoriteItemWeb/MyFavoriteItemWeb";
import MyFavoriteItemMobile from "./MyFavoriteItemMobile/MyFavoriteItemMobile";

const MyFavoriteItem = ({res, id}) => {

    return (
        <>
            <MyFavoriteItemWeb index={id} res={res}/>
            <MyFavoriteItemMobile res={res}/>
        </>
    );
};

export default MyFavoriteItem;