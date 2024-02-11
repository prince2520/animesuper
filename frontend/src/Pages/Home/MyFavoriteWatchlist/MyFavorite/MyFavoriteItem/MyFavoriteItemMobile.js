import React from "react";

import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../../../store/overlay";
import { MyFavoriteActions } from "../../../../../store/myFavorite";

const favoriteItemData = (value) => {
  return [
    {
      heading: null,
      value: value.title,
    },
    {
      heading: "Score: ",
      value: value.score,
    },
    {
      heading: "Types: ",
      value: value.type,
    },
    {
      heading: "Year: ",
      value: value.year,
    },
  ];
};

const MyFavoriteItemMobile = ({ res }) => {
  const dispatch = useDispatch();

  return (
    <div className={"favorite-table-item-mobile"}>
      <div className="favorite-table-item-mobile-left">
        <span className="item-img">
          <img
            alt="main_picture"
            width="100%"
            style={{ width: "6rem", height: "100%" }}
            src={res.fields.img_url}
          />
        </span>
      </div>
      <div className="favorite-table-item-mobile-right">
        {favoriteItemData(res.fields).map((data) => (
          <div className="item-type-mobile">
            {data.heading && <span>{data.heading}</span>}
            <span>{data.value}</span>
          </div>
        ))}

        <div className="favorite-table-item-mobile-btn">
          <div
            style={{ alignSelf: "flex-start" }}
            className="item-delete-mobile cursor-btn"
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
              style={{ fontSize: "1.5rem" }}
              icon="material-symbols:delete-outline-rounded"
            />
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteItemMobile;
