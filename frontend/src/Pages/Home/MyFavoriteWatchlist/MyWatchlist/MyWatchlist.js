import { uid } from "uid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";

import NoData from "../NoData/NoData";
import MyWatchlistItem from "./MyWatchlistItem/MyWatchlistItem";
import ChangeCategory from "../../../../components/ChangeCategory/ChangeCategory";
import MyWatchlistItemSkeleton from "../FavoriteWatchlistSkeleton/FavoriteWatchlistSkeleton";

import { MyWatchlistImage } from "../../../../photo";
import { helperActions } from "../../../../redux/slice/helperSlice";
import { animeStatus, mangaStatus } from "../../../../constants/constants";
import { getWatchlistThunk } from "../../../../redux/thunk/myWatchlistThunk";
import { watchlistHeadings, watchlistColors } from "../../../../constants/constants";

import "./MyWatchlist.css";
import "../MyFavoriteWatchlist.css";

// Sub Components
const Heading = () => {
  return (
    <div className="my-watchlist-table-heading">
      {watchlistHeadings.map((heading) => (
        <h5 key={uid(8)} className="color-text" style={{ width: heading.width }}>
          {heading.title}
        </h5>
      ))}
    </div>
  );
};

// watchlist color status
const ColorStatus = () => {
  return (
    <div className="anime-status-color">
      {watchlistColors.map((data) => {
        return (
          <div key={uid(8)} className={`${data.className} color-title`}>
            <span className="circle" />
            <h6>{data.title}</h6>
          </div>
        );
      })}
    </div>
  );
};

// Main Component
const MyWatchlist = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    delay: 200,
  });

  const dispatch = useDispatch();
  const [status, setStatus] = useState("All Anime");
  const { category } = useParams();
  const navigate = useNavigate();

  const [showWatchlistSkeleton, setShowWatchlistSkeleton] = useState(false);

  const watchlist = useSelector(state => state.myWatchlist.watchlist);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(helperActions.searchBarReducer(false));
    dispatch(helperActions.blurNavbarReducer(!inView));

    return () => {
      dispatch(helperActions.searchBarReducer(true));
      dispatch(helperActions.blurNavbarReducer(true));
    };
  }, [inView, dispatch]);

  useEffect(() => {
    setShowWatchlistSkeleton(true);
    dispatch(getWatchlistThunk()).unwrap().finally(() => setShowWatchlistSkeleton(false));
  }, [dispatch]);

  useEffect(() => {
    let temp = watchlist[category.toLowerCase()].filter(item => status === item.status | status === "All Manga" || status === "All Anime");
    setData(temp);
  }, [status, category, JSON.stringify(watchlist)]);

  return (
    <div className="my-watchlist-page">
      <div className="my-watchlist-img-container" ref={ref}>
        <h2>My Watchlist</h2>
        <img src={MyWatchlistImage} alt="my-watchlist" />
      </div>
      <div className="anime-status">
        <ChangeCategory
          eventHandler={(name) => {
            if (name.toLowerCase() === "anime")
              setStatus("All Anime")
            else
              setStatus("All Manga")

            navigate(`/home/my-watchlist/${name.toLowerCase()}`)
          }
          }
        />
        <div className="anime-status-list">
          {(category === "anime"
            ? animeStatus
            : mangaStatus
          ).map((res) => (
            <span
              key={uid(8)}
              onClick={() => {
                setStatus(res);
              }}
              className={`cursor-btn ${status === res ? "selected" : ""}`}
            >
              <h5>{res}</h5>
            </span>
          ))}
        </div>
        <ColorStatus />
      </div>
      <div className="my-watchlist-table">
        <Heading />
        <div className="my-watchlist-table-list">
          {!showWatchlistSkeleton && data.length === 0 && <NoData />}
          {data.map((item, index) => (
            <MyWatchlistItem key={uid(8)} item={item} index={index} />
          ))}
          {showWatchlistSkeleton &&
            !data.length &&
            Array(5)
              .fill(null)
              .map(() => <MyWatchlistItemSkeleton key={uid(8)} />)}
        </div>
      </div>
    </div>
  );
};

export default React.memo(MyWatchlist);
