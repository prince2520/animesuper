import React from "react";

import MyWatchlistItemWeb from "./MyWatchlistItemWeb/MyWatchlistItemWeb";
import MyWatchlistItemMobile from "./MyWatchlistItemMobile/MyWatchlistItemMobile";

const MyWatchlistItem = ({ res, index }) => {
  return (
    <>
      <MyWatchlistItemWeb res={res} index={index} />
      <MyWatchlistItemMobile res={res} index={index} />
    </>
  );
};

export default React.memo(MyWatchlistItem);
