import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../../../../store/overlay";
import { MyWatchlistActions } from "../../../../../../store/myWatchlist";

import "./MyWatchlistItemMobile.css";

const MyWatchlistItemMobile = ({ res }) => {
  const dispatch = useDispatch();

  return (
    <div className={"my-watchlist-table-item-mobile"}>
      <div className="my-watchlist-table-item-mobile-left">
        <span className="item-no" style={{ borderLeft: `${res.color}` }} />
        <span className="item-img">
          <img alt="main_picture" width="100%" src={res.fields.img_url} />
        </span>
      </div>

      <div className="my-watchlist-table-item-mobile-right">
        <h5 className="item-title-mobile color-text">{res.fields.title}</h5>
        <div className="item-type-mobile">
          <p>Type: </p>
          <p>
            {res.fields.type.charAt(0).toUpperCase() + res.fields.type.slice(1)}
          </p>
        </div>
        <span className="item-progress">
          <p className={"progress-bar-title"}>Progress :</p>
          <div className="progress-bar-detail">
            <p className="color-text">
              {res.fields.progress_read_watched} /{" "}
              {res.fields.num_episode_or_chapter
                ? res.fields.num_episode_or_chapter
                : "N/A"}
            </p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-completed"
              style={{
                width: `${
                  res.fields.num_episode_or_chapter
                    ? (res.fields.progress_read_watched /
                        res.fields.num_episode_or_chapter) *
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
              dispatch(OverlayActions.showEditWatchlistHandler());
              dispatch(
                MyWatchlistActions.selectedWatchlistItemHandler({
                  ...res.fields,
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
              dispatch(OverlayActions.showRemoveWatchlistHandler());
              dispatch(
                MyWatchlistActions.removeWatchlistItem({
                  category: res.fields.category,
                  categoryId: res.fields.category_id,
                })
              );
            }}
          >
            <Icon
              style={{ fontSize: "1.25rem" }}
              icon="material-symbols:delete-outline-rounded"
            />
            <p style={{color:"var(--primary)"}}>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWatchlistItemMobile;
