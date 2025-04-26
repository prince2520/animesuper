import React from "react";

import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../../../redux/slice/overlaySlice";
import { MyFavoriteActions } from "../../../../../redux/slice/myFavoriteSlice";

const MyFavoriteItemWeb = ({ item, idx }) => {
  const dispatch = useDispatch();

  return (
    <div className="favorite-table-item">
      <h5 style={{ width: "5%" }}>{idx + 1}</h5>
      <h5 style={{ width: "15%" }}>
        <img alt="main_picture" width="100%" src={item.img_url} />
      </h5>
      <h5
        style={{ width: "24%", alignItems: "flex-start" }}
        className="item-title"
      >
        {item.title}
      </h5>
      <h5 style={{ width: "8%" }}>{item.score}</h5>
      <h5 style={{ width: "8%" }}>{item.type}</h5>
      <h5 style={{ width: "10%" }}>{item.year}</h5>
      <h5 style={{ width: "20%" }}>{item.num_episode_chapter}</h5>
      <h5
        style={{ width: "10%" }}
        onClick={() => {
          dispatch(
            MyFavoriteActions.selectedFavoriteReducer({
              selectedCategory: item.category,
              selectedCategoryId : item.category_id
            })
          );
          dispatch(OverlayActions.showRemoveFavoriteReducer());
        }}
      >
        <Icon
          className="cursor-btn"
          icon="material-symbols:delete-outline-rounded"
          style={{ fontSize: "1.75rem" }}
        />
      </h5>
    </div>
  );
};

export default MyFavoriteItemWeb;
