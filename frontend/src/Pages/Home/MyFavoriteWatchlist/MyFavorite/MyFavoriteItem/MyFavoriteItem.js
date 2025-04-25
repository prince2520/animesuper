import React from "react";

import MyFavoriteItemWeb from "./MyFavoriteItemWeb";
import MyFavoriteItemMobile from "./MyFavoriteItemMobile";

const MyFavoriteItem = ({ item, idx }) => {
  return (
    <>
      <MyFavoriteItemWeb item={item} idx={idx}/>
      <MyFavoriteItemMobile item={item} idx={idx} />
    </>
  );
};

export default React.memo(MyFavoriteItem);
