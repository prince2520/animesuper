import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { helperActions } from "../../store/helper";

const MenuBtn = () => {
  const dispatch = useDispatch();
  const showMobileSideBar = useSelector(
    (state) => state.helper.showMobileSideBar
  );

  return (
    <Icon
      className="cursor-btn"
      icon="material-symbols:menu-rounded"
      onClick={() =>
        dispatch(helperActions.showMobileSideBarHandler(!showMobileSideBar))
      }
      style={{ fontSize: "2rem", color: "white" }}
    />
  );
};

export default MenuBtn;
