import React from "react";

import MyWatchlistItemWeb from "./MyWatchlistItemWeb/MyWatchlistItemWeb";
import MyWatchlistItemMobile from "./MyWatchlistItemMobile/MyWatchlistItemMobile";

const MyWatchlistItem = ({ item, index }) => {

  return (
    <>
      <MyWatchlistItemWeb item={item} index={index} />
      <MyWatchlistItemMobile item={item} index={index} />
    </>
  );
};

export default React.memo(MyWatchlistItem);
