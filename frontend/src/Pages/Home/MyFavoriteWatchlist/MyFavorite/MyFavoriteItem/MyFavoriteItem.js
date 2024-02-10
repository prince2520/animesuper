import React from "react";

import MyFavoriteItemWeb from "./MyFavoriteItemWeb";
import MyFavoriteItemMobile from "./MyFavoriteItemMobile";

const MyFavoriteItem = ({res, id}) => {
    return (
        <>
            <MyFavoriteItemWeb index={id} res={res}/>
            <MyFavoriteItemMobile res={res}/>
        </>
    );
};

export default React.memo(MyFavoriteItem);