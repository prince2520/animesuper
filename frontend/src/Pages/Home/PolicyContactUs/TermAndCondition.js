import "./PolicyContactUs.css";

import {termAndConditions} from "../../../constants/constants"

const TermAndCondition = () => {
  return (
    <div className="term-and-condition-page">
      <div className="route">
        <h3 className="color-text-light">
          Policy > <span className="color-text">Term and Conditions</span>
        </h3>
      </div>
      <div className="flex-center terms">
        {termAndConditions.map((cond, index) => (
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

export default TermAndCondition;
