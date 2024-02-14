import React from "react";
import { Icon } from "@iconify/react";
import "./PrevNextBtn.css";

const PrevNextButton = ({updateAnimeMangaCategory}) => {
  return (
    <div className="flex-center prev-next-btn">
      <div className="cursor-btn flex-center prev-btn" onClick={()=>updateAnimeMangaCategory(-20)}>
        <h5 className="flex-center color-text">
          <Icon icon="ooui:arrow-previous-ltr" fontSize={"1.25rem"} />
        </h5>
        <h5 className="color-text">Previous</h5>
      </div>
      <div className="cursor-btn flex-center next-btn" onClick={()=>updateAnimeMangaCategory(20)}>
        <h5 className="color-text">Next</h5>
        <h5 className="flex-center color-text">
          <Icon icon="ooui:arrow-previous-rtl"  fontSize={"1.25rem"} />
        </h5>
      </div>
    </div>
  );
};

export default React.memo(PrevNextButton);
