import React from "react";

import { uid } from "uid";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../../../redux/slice/overlaySlice";
import { MyFavoriteActions } from "../../../../../redux/slice/myFavoriteSlice";
import { favoriteItemData } from "../../../../../constants/constants";

const MyFavoriteItemMobile = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={"favorite-table-item-mobile"}>
      <div className="favorite-table-item-mobile-left">
        <span className="item-img">
          <img
            alt="main_picture"
            width="100%"
            style={{ width: "6rem", height: "100%" }}
            src={item.img_url}
          />
        </span>
      </div>
      <div className="favorite-table-item-mobile-right">
        <div className="item-type-mobile">
          <h5 className="color-text">{item.title}</h5>
        </div>

        {favoriteItemData(item).map((data) => (
          <div key={uid(8)} className="item-type-mobile">
            {data.heading && <p>{data.heading}</p>}
            <p>{data.value}</p>
          </div>
        ))}

        <div className="favorite-table-item-mobile-btn">
          <div
            style={{ alignSelf: "flex-start" }}
            className="item-delete-mobile cursor-btn"
            onClick={() => {
              dispatch(
                MyFavoriteActions.selectedFavoriteReducer({
                  selectedCategory: item.category,
                  selectedCategoryId: item.category_id
                })
              );
              dispatch(OverlayActions.showDeleteFavoriteReducer());
            }}
          >
            <Icon
              style={{ fontSize: "1.25rem" }}
              icon="material-symbols:delete-outline-rounded"
            />
            <p style={{ color: 'var(--primary)' }}>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteItemMobile;
