import { useContext } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { OverlayActions } from "../../../store/overlay";
import { AlertBoxActions } from "../../../store/alertBox";
import { deleteWatchlistItem } from "../../../api/watchlist";
import { MyWatchlistActions } from "../../../store/myWatchlist";

import AuthContext from "../../../Context/auth";
import CustomButton from "../../CustomButton/CustomButton";

const RemoveWatchlist = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const category = useSelector((state) => state.myWatchlist.removeCategory);
  const categoryId = useSelector((state) => state.myWatchlist.removeCategoryId);

  const removeWatchlistItemHandler = () => {
    deleteWatchlistItem(authCtx.email, category, categoryId)
      .then((res) => {
        dispatch(AlertBoxActions.saveAlertBoxData(res));
        dispatch(MyWatchlistActions.deleteWatchlistItem());
        dispatch(OverlayActions.closeOverlayHandler());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="remove-watchlist-container">
      <div className="flex-center remove-watchlist-container-top">
        <h3>Remove</h3>
        <span>
          <Icon
            onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
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
          onClick={() => dispatch(OverlayActions.closeOverlayHandler())}
          backgroundColor={"var(--error)"}
        >
          <h5 className="color-text">No</h5>
        </CustomButton>
        <CustomButton
          width={"45%"}
          onClick={() => removeWatchlistItemHandler()}
          backgroundColor={"var(--success)"}
        >
          <h5 className="color-text">Yes</h5>
        </CustomButton>
      </div>
    </div>
  );
};

export default RemoveWatchlist;
