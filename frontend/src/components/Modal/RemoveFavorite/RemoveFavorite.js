import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { OverlayActions } from "../../../redux/slice/overlaySlice";
import { AlertBoxActions } from "../../../store/alertBox";
import { MyFavoriteActions } from "../../../store/myFavorite";

import CustomButton from "../../CustomButton/CustomButton";
import { deleteFavoriteThunk } from "../../../redux/thunk/myFavoriteThunk";

const RemoveFavorite = () => {
  const dispatch = useDispatch();
  const myFavorite = useSelector(state => state.myFavorite)


  const deleteFavoriteHandler = () => {
    dispatch(deleteFavoriteThunk({
      category: myFavorite.deleteFavoriteCategory,
      category_id: myFavorite.deleteFavoriteCategoryId
    }))
      .unwrap()
      .then(res => {
        dispatch(AlertBoxActions.saveAlertBoxData(res));
        dispatch(OverlayActions.closeOverlayReducer());
      }).catch(err=>console.log(err));
  }

  return (
    <div className="remove-favorite-container">
      <div className="flex-center remove-favorite-container-top">
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
      <div className="remove-favorite-container-middle">
        <p className="color-text-light">
          Are you sure, do you want to remove this item from your favorite?
        </p>
      </div>
      <div className="flex-center remove-favorite-container-bottom">
        <CustomButton
          width={"45%"}
          onClick={() => dispatch(OverlayActions.closeOverlayReducer())}
          backgroundColor={"var(--error)"}
        >
          <h5 className="color-text">No</h5>
        </CustomButton>
        <CustomButton
          width={"45%"}
          onClick={() => deleteFavoriteHandler()}
          backgroundColor={"var(--success)"}
        >
          <h5 className="color-text">Yes</h5>
        </CustomButton>
      </div>
    </div>
  );
};

export default RemoveFavorite;
