import React, { useCallback } from "react";

import { useContext } from "react";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { categoryType } from "../../constants/constants";
import { addToWatchlist } from "../../api/watchlist";
import { AlertBoxActions } from "../../store/alertBox";
import { uid } from "uid";

import AuthContext from "../../Context/auth";
import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import "./Card.css";

const Card = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();

  const authCtx = useContext(AuthContext);


  const addToWatchlistHandler = () => {
    if (authCtx.isAuth) {
      addToWatchlist(
        authCtx.email,
        category,
        props.detail.id,
        props.detail.main_picture.medium,
        props.detail.title,
        category === categoryType[0].toLowerCase()
          ? props.detail.num_episodes
          : props.detail.num_chapters,
        props.detail.media_type,
        authCtx.token
      )
        .then((res) => dispatch(AlertBoxActions.saveAlertBoxData(res)))
        .catch((err) => console.log(err));
    } else {
      dispatch(
        AlertBoxActions.saveAlertBoxData({
          success: false,
          description: "User not Authenticated, Please login!",
        })
      );
    }
  };

  return (
      <div
        className={`card `}
        key={uid(8)}
      >
        {props.detail.mean && (
          <motion.span className="rate">
            <Icon
              icon="material-symbols:star-rounded"
              style={{ fontSize: "1.5rem", color: "yellow" }}
            />
            <h6 className="color-text">{props.detail.mean}</h6>
          </motion.span>
        )}

        {!props.isRecommemdation && (
          <div
            className="watchlist"
            style={{ cursor: "pointer" }}
            onClick={() => addToWatchlistHandler()}
          >
            +
          </div>
        )}

        <div className="card-bottom">
          <h5 className="color-text title">
            {props.detail.title.slice(0, 25)}{" "}
            {props.detail.title.length >= 25 ? "..." : ""}
          </h5>
          {props.detail.genres && (
            <div key={uid(8)} className="flex-center genres ">
              {props.detail.genres.slice(0, 4).map((genre) => (
                <h6 key={uid(8)} className="color-text">{genre.name},</h6>
              ))}
            </div>
          )}
        </div>
        <ZoomInZoomOut>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/home/${category}/${props.detail.id}`)}
            src={props.detail.main_picture?.medium}
            alt="card"
          />
        </ZoomInZoomOut>
      </div>
  );
};

export default React.memo(Card);
