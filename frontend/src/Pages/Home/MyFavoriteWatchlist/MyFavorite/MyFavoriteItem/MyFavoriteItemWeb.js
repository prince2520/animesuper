import { OverlayActions } from "../../../../../store/overlay";
import { Icon } from "@iconify/react";
import React from "react";
import { MyFavoriteActions } from "../../../../../store/myFavorite";
import { useDispatch } from "react-redux";

const MyFavoriteItemWeb = ({ res, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="favorite-table-item">
      <h5 style={{ width: "5%" }}>
        {index + 1}
      </h5>
      <h5 style={{ width: "15%" }}>
        <img alt="main_picture" width="100%" src={res.fields.img_url} />
      </h5>
      <h5
        style={{ width: "24%", alignItems: "flex-start" }}
        className="item-title"
      >
        {res.fields.title}
      </h5>
      <h5 style={{ width: "8%" }}>
        {res.fields.score}
      </h5>
      <h5 style={{ width: "8%" }}>
        {res.fields.type}
      </h5>
      <h5 style={{ width: "10%" }}>
        {res.fields.year}
      </h5>
      <h5 style={{ width: "20%" }}>
        {res.fields.num_episode_chapter}
      </h5>
      <h5
        style={{ width: "10%" }}
        onClick={() => {
          dispatch(
            MyFavoriteActions.removeFavoriteItem({
              category: res.fields.type,
              categoryId: res.fields.category_id,
            })
          );
          dispatch(OverlayActions.showRemoveFavoriteHandler());
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
