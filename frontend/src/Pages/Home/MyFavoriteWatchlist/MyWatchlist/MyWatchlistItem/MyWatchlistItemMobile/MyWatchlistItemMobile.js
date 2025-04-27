import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../../../../redux/slice/overlaySlice";
import { MyWatchlistActions } from "../../../../../../redux/slice/myWatchlistSlice";

import "./MyWatchlistItemMobile.css";

const MyWatchlistItemMobile = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={"my-watchlist-table-item-mobile"}>
      <div className="my-watchlist-table-item-mobile-left">
        <span className="item-no" style={{ borderLeft: `${item.color}` }} />
        <span className="item-img">
          <img alt="main_picture" width="100%" src={item.img_url} />
        </span>
      </div>

      <div className="my-watchlist-table-item-mobile-right">
        <h5 className="item-title-mobile color-text">{item.title}</h5>
        <div className="item-type-mobile">
          <p>Type: </p>
          <p>
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </p>
        </div>
        <span className="item-progress">
          <p className={"progress-bar-title"}>Progress :</p>
          <div className="progress-bar-detail">
            <p className="color-text">
              {item.progress_read_watched} /{" "}
              {item.num_episode_or_chapter
                ? item.num_episode_or_chapter
                : "N/A"}
            </p>
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
        </span>

        <div className="my-watchlist-table-item-mobile-btn">
          <div
            style={{ cursor: "pointer" }}
            className="item-edit-mobile"
            onClick={() => {
              dispatch(OverlayActions.showUpdateWatchlistReducer());
              dispatch(
                MyWatchlistActions.selectedWatchlistReducer({
                  selectedCategory: item.category,
                  selectedCategoryId: item.category_id
                })
              );
            }}
          >
            <Icon style={{ fontSize: "1.25rem" }} icon="ri:edit-line" />
            <p className="color-text">Edit</p>
          </div>
          <div
            className="item-delete-mobile cursor-btn"
            onClick={() => {
              dispatch(
                MyWatchlistActions.selectedWatchlistReducer({
                  selectedCategory: item.category,
                  selectedCategoryId: item.category_id
                })
              );
              dispatch(OverlayActions.showDeleteWatchlistReducer());
            }}
          >
            <Icon
              style={{ fontSize: "1.25rem" }}
              icon="material-symbols:delete-outline-rounded"
            />
            <p style={{ color: "var(--primary)" }}>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWatchlistItemMobile;
