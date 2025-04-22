import React, { useContext, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { editWatchlistItem } from "../../../api/watchlist";
import { OverlayActions } from "../../../store/overlay";
import { AlertBoxActions } from "../../../store/alertBox";
import { MyWatchlistActions } from "../../../store/myWatchlist";
import { mangaStatus, animeStatus, categoryType  } from "../../../constants/constants";

import AuthContext from "../../../Context/auth";
import CustomButton from "../../CustomButton/CustomButton";

import "./EditWatchlist.css";
import { uid } from "uid";

const EditWatchlist = () => {
  const dispatch = useDispatch();
  const progressRef = useRef(null);
  const authCtx = useContext(AuthContext);
  const currStatus = useSelector((state) => state.myWatchlist.currStatus);
  const data = useSelector((state) => state.myWatchlist.selectedWatchlistItem);
  
  const [status, setStatus] = useState(data.status);

  const saveStatusHandler = (event) => {
    event.preventDefault();
    editWatchlistItem(
      status,
      progressRef.current.value,
      data.category_id,
      authCtx.token
    )
      .then((res) => {
        dispatch(AlertBoxActions.saveAlertBoxData(res));
        if (res.success) {
          dispatch(OverlayActions.closeOverlayHandler());
          dispatch(
            MyWatchlistActions.editWatchlistItem({
              category_id: data.category_id,
              status: status,
              progress_read_watched: progressRef.current.value,
              currStatus: currStatus,
              category: data.category,
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="edit-status-card"
      onSubmit={(event) => saveStatusHandler(event)}
    >
      <div className="flex-center edit-status-card-left">
        <div className="img-container">
          <img src={data.img_url} alt={"anime-manga"} />
        </div>
      </div>
      <div className="edit-status-card-right">
        <div className="edit-status-card-right-top">
          <h4 className="color-text">{data.title}</h4>
          <h5 className="close-button cursor-btn">
            <Icon
              color="white"
              onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
              icon="material-symbols:close"
              style={{ fontSize: "2rem" }}
            />
          </h5>
        </div>
        <div className="edit-status-card-right-middle">
          {(data.category === categoryType[0].toLowerCase()
            ? animeStatus.slice(1, 6)
            : mangaStatus.slice(1, 6)
          ).map((title) => (
            <h6
              key={uid(8)}
              onClick={() => setStatus(title)}
              className={`color-text-light button cursor-btn color-text ${
                title === status ? "selected-status" : ""
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
                defaultValue={data.progress_read_watched}
              />{" "}
              /
            </h6>
            <h6 className="color-text">
              {" "}
              {data.num_episode_or_chapter
                ? data.num_episode_or_chapter
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
