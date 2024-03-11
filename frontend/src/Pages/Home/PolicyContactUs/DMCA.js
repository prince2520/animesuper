import "./PolicyContactUs.css";

import {dmcaConditions} from "../../../constants/constants"

const DMCA = () => {
  return (
    <div className="dmca-page">
      <div className="route">
        <h3 className="color-text-light">
          Policy > <span className="color-text">DMCA</span>
        </h3>
      </div>
      <div className="flex-center terms">
        {dmcaConditions.map((cond, index) => (
          <div className="flex-center term">
            <h4 className="color-text-light">
              {index + 1}. {cond.title}
            </h4>
            <p>{cond.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DMCA;
