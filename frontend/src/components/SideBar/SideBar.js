import { Icon } from "@iconify/react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../../photo";
import { sideBarData } from "../../constants/constants";
import { OverlayActions } from "../../redux/slice/overlaySlice";

import AuthContext from "../../Context/auth";

import "./SideBar.css";
import { uid } from "uid";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="anime">
          <img alt={"anime-super"} src={Logo} width={"100%"} />
        </Link>
        <div className="options">
          {sideBarData(authCtx.isAuth).map((data) => {
            return (
              data.isAuth && (
                <div className="option" key={uid(8)}>
                  <h6>{data.categoryTitle}</h6>
                  {data.subCategoryData.map((subData) => (
                    <Link
                      key={uid(8)}
                      className="option-link"
                      to={subData.to}
                    >
                      <h5 className="flex-center">
                        <Icon icon={subData.icon} />
                      </h5>
                      <h5>{subData.name}</h5>
                    </Link>
                  ))}
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="option">
          <h6>General</h6>
          {authCtx.isAuth && (
            <div
              className="cursor-btn  option-link"
              onClick={() => dispatch(OverlayActions.showLogoutReducer())}
            >
              <h5>
                <Icon icon="ri:logout-circle-line" />
              </h5>
              <h5 className={"category-btn"}>Logout</h5>
            </div>
          )}
          {!authCtx.isAuth && (
            <div
              className="cursor-btn option-link"
              onClick={() => navigate("/login")}
            >
              <h5>
                <Icon
                  icon="ri:login-circle-line"
                  onClick={() => navigate("/login")}
                />
              </h5>
              <h5 className={"category-btn"}>Login</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
