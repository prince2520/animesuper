import React from "react";

import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { OverlayActions } from "../../../../../redux/slice/overlaySlice";
import { MyFavoriteActions } from "../../../../../store/myFavorite";
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
          <div className="item-type-mobile">
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
                MyFavoriteActions.removeFavoriteItem({
                  category: item.type,
                  categoryId: item.category_id,
                })
              );
              dispatch(OverlayActions.showRemoveFavoriteReducer());
            }}
          >
            <Icon
              style={{ fontSize: "1.25rem" }}
              icon="material-symbols:delete-outline-rounded"
            />
            <p style={{color: 'var(--primary)'}}>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteItemMobile;
