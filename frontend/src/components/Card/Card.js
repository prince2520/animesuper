import React from "react";

import { uid } from "uid";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { AlertBoxActions } from "../../store/alertBox";
import { categoryType } from "../../constants/constants";
import { createWatchlistThunk } from "../../redux/thunk/myWatchlistThunk";

import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import "./Card.css";

const Card = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();

  const createWatchlistHandler = () => {
    dispatch(createWatchlistThunk({
      category,
      category_id: props.detail.id,
      img_url: props.detail.main_picture.medium,
      title: props.detail.title,
      num_episode_or_chapter: (category === categoryType[0].toLowerCase())
        ? props.detail.num_episodes
        : props.detail.num_chapters,
      media_type: props.detail.media_type,
    })).unrap().then((res) => {
      dispatch(AlertBoxActions.saveAlertBoxData(res))
    }).catch((err) => console.log(err));
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
          onClick={() => createWatchlistHandler()}
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
