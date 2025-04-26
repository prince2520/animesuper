import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { OverlayActions } from "../../../../../../redux/slice/overlaySlice";
import { MyWatchlistActions } from "../../../../../../redux/slice/myWatchlistSlice";

import "./MyWatchlistItemWeb.css";

const MyWatchlistItemWeb = ({ item, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-watchlist-table-item">
      <h5
        style={{ borderLeft: `5px solid ${item.color}`, height: `100%` }}
        className="item-no"
      >
        {index + 1}
      </h5>
      <h5 className="item-img">
        <img alt="main_picture" width="100%" src={item.img_url} />
      </h5>
      <h5 className="item-title">{item.title}</h5>
      <div className="item-progress">
        <div className="progress-bar-detail">
          <h5>
            {item.progress_read_watched} /{" "}
            {item.num_episode_or_chapter
              ? item.num_episode_or_chapter
              : "N/A"}
          </h5>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-completed"
            style={{
              width: `${item.num_episode_or_chapter
                  ? (item.progress_read_watched /
                    item.num_episode_or_chapter) *
                  100
                  : ""
                }%`,
            }}
          />
        </div>
      </div>
      <h5 className="item-type">
        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
      </h5>
      <h5
        className="item-delete cursor-btn"
        onClick={() => {
          dispatch(MyWatchlistActions.selectedWatchlistReducer({
            selectedCategory: item.category,
            selectedCategoryId: item.category_id
          }));
          dispatch(OverlayActions.showRemoveWatchlistReducer());
        }}
      >
        <Icon
          icon="material-symbols:delete-outline-rounded"
          style={{ fontSize: "1.75rem" }}
        />
      </h5>
      <h5
        className="item-edit cursor-btn"
        onClick={() => {
          dispatch(OverlayActions.showEditWatchlistReducer());
          dispatch(
            MyWatchlistActions.selectedWatchlistReducer({ 
              selectedCategory : item.category,
              selectedCategoryId : item.category_id
             })
          );
        }}
      >
        <Icon icon="ri:edit-line" style={{ fontSize: "1.75rem" }} />
      </h5>
    </div>
  );
};

export default MyWatchlistItemWeb;
