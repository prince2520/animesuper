import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { OverlayActions } from "../../../../../../store/overlay";
import { MyWatchlistActions } from "../../../../../../store/myWatchlist";

import "./MyWatchlistItemWeb.css";

const MyWatchlistItemWeb = ({ res, index }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(res, index);
  }, []);

  return (
    <div className="my-watchlist-table-item">
      <h5
        style={{ borderLeft: `5px solid ${res.color}`, height: `100%` }}
        className="item-no"
      >
        {index + 1}
      </h5>
      <h5 className="item-img">
        <img alt="main_picture" width="100%" src={res.fields.img_url} />
      </h5>
      <h5 className="item-title">{res.fields.title}</h5>
      <div className="item-progress">
        <div className="progress-bar-detail">
          <h5>
            {res.fields.progress_read_watched} /{" "}
            {res.fields.num_episode_or_chapter
              ? res.fields.num_episode_or_chapter
              : "N/A"}
          </h5>
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
      </div>
      <h5 className="item-type">
        {res.fields.type.charAt(0).toUpperCase() + res.fields.type.slice(1)}
      </h5>
      <h5
        className="item-delete cursor-btn"
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
          icon="material-symbols:delete-outline-rounded"
          style={{ fontSize: "1.75rem" }}
        />
      </h5>
      <h5
        className="item-edit cursor-btn"
        onClick={() => {
          dispatch(OverlayActions.showEditWatchlistHandler());
          dispatch(
            MyWatchlistActions.selectedWatchlistItemHandler({ ...res.fields })
          );
        }}
      >
        <Icon icon="ri:edit-line" style={{ fontSize: "1.75rem" }} />
      </h5>
    </div>
  );
};

export default MyWatchlistItemWeb;
