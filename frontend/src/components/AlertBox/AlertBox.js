import React from "react";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { getAlertIconAndColor } from "../../common";
import { AlertBoxActions } from "../../store/alertBox";

import "./AlertBox.css";

const AlertBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.alertBox.data);
  const getIconAndColor = getAlertIconAndColor(data.success);

  const alertBoxVariant = {
    initial: {
      y: -10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={alertBoxVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.25 }}
      className="flex-center alert-box-page"
    >
      <div
        className="shadow alert-box"
        style={{ backgroundColor: getIconAndColor.primaryColor }}
      >
        <div
          className="flex-center icon-container"
          style={{ backgroundColor: getIconAndColor.secondaryColor }}
        >
          <Icon
            icon={getIconAndColor.icon}
            style={{ fontSize: "2rem", color: `var(--text)` }}
          />
        </div>
        <div className="flex-center alert-box-container">
          <div className="alert-box-status">
            {["circle-1", "circle-2", "circle-3"].map((className) => (
              <div
                className={className}
                style={{ backgroundColor: getIconAndColor.secondaryColor }}
              />
            ))}
          </div>
          <div className="flex-center alert-box-content">
            <div style={{ paddingLeft: "1rem" }}>
              <h5>{data.success ? "Success" : "Error"}</h5>
              <p className="color-text">{data.description}</p>
            </div>
          </div>
          <div
            className="alert-box-close"
            onClick={() => dispatch(AlertBoxActions.closeAlertBox())}
          >
            <Icon
              className={"cursor-btn"}
              icon="material-symbols:close-rounded"
              style={{ fontSize: "2rem" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(AlertBox);
