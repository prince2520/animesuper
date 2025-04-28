import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";

import CustomButton from "../../CustomButton/CustomButton";

import { OverlayActions } from "../../../redux/slice/overlaySlice";
import { updateWatchlistThunk } from "../../../redux/thunk/myWatchlistThunk";
import { mangaStatus, animeStatus, categoryType } from "../../../constants/constants";

import "./UpdateWatchlist.css";

const EditWatchlist = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState(data?.status);

  const progressRef = useRef(null);
  const myWatchlist = useSelector(state => state.myWatchlist);


  useEffect(() => {
    let temp = (myWatchlist.selectedCategory === "anime" ? myWatchlist.watchlist.anime : myWatchlist.watchlist.manga)?.find(item => item.category_id === myWatchlist.selectedCategoryId);
    setData(temp);
    setStatus(temp.status)
  }, [myWatchlist.selectedCategoryId])

  const updateWatchlistHandler = (event) => {
    event.preventDefault();

    let temp = {
      category: data.category,
      category_id: data.category_id,
      status: status,
      progress_read_watched: progressRef.current.value,
    }

    dispatch(updateWatchlistThunk({ ...temp }));
  }

  return (
    <form
      className="edit-status-card"
      onSubmit={updateWatchlistHandler}
    >
      <div className="flex-center edit-status-card-left">
        <div className="img-container">
          <img src={data?.img_url} alt={"anime-manga"} />
        </div>
      </div>
      <div className="edit-status-card-right">
        <div className="edit-status-card-right-top">
          <h4 className="color-text">{data?.title}</h4>
          <h5 className="close-button cursor-btn">
            <Icon
              color="white"
              onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
              icon="material-symbols:close"
              style={{ fontSize: "2rem" }}
            />
          </h5>
        </div>
        <div className="edit-status-card-right-middle">
          {(data?.category === categoryType[0].toLowerCase()
            ? animeStatus.slice(1, 6)
            : mangaStatus.slice(1, 6)
          ).map((title) => (
            <h6
              key={title.toString()}
              onClick={() => setStatus(title)}
              className={`color-text-light button cursor-btn color-text ${title === status ? "selected-status" : ""
                }`}
            >
              {title}
            </h6>
          ))}
        </div>
        <div className="edit-status-card-right-bottom">
          <div className="flex-center num_of_episode">
            <h6 style={{ whiteSpace: "nowrap" }}>Episode :</h6>
            <h6 style={{ whiteSpace: "nowrap" }}>
              <input
                ref={progressRef}
                defaultValue={data?.progress_read_watched}
              />{" "}
              /
            </h6>
            <h6 className="color-text">
              {" "}
              {data?.num_episode_or_chapter
                ? data?.num_episode_or_chapter
                : "N/A"}
            </h6>
          </div>
          <CustomButton width={"40%"} backgroundColor={"var(--primary)"}>
            <p className="color-text">Save</p>
          </CustomButton>
        </div>
      </div>
    </form>
  );
};
export default EditWatchlist;