import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { OverlayActions } from "../../../redux/slice/overlaySlice";
import { deleteWatchlistThunk } from "../../../redux/thunk/myWatchlistThunk";

import CustomButton from "../../CustomButton/CustomButton";

const DeleteWatchlist = () => {
  const dispatch = useDispatch();
  const myWatchlist = useSelector(state => state.myWatchlist);


  const deleteWatchlistHandler = () => {
    dispatch(deleteWatchlistThunk({
      category: myWatchlist.selectedCategory,
      category_id: myWatchlist.selectedCategoryId
    }))
  }

  return (
    <div className="remove-watchlist-container">
      <div className="flex-center remove-watchlist-container-top">
        <h3>Remove</h3>
        <span>
          <Icon
            onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
            className={"cursor-btn"}
            color="white"
            icon="material-symbols:close"
            style={{ fontSize: "2rem" }}
          />
        </span>
      </div>
      <div className="remove-watchlist-container-middle">
        <p className="color-text-light">
          Are you sure, do you want to remove this item from your watchlist?
        </p>
      </div>
      <div className="remove-watchlist-container-bottom">
        <CustomButton
          width={"45%"}
          onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
          backgroundColor={"var(--error)"}
        >
          <h5 className="color-text">No</h5>
        </CustomButton>
        <CustomButton
          width={"45%"}
          onClick={() => deleteWatchlistHandler()}
          backgroundColor={"var(--success)"}
        >
          <h5 className="color-text">Yes</h5>
        </CustomButton>
      </div>
    </div>
  );
};

export default DeleteWatchlist;
