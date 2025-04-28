import { Icon } from "@iconify/react";
import { ThankYouImg } from "../../../photo";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="flex-center thank-you-container-top">
        <h3>Thank You !</h3>
        <span>
          <Icon
            color="white"
            icon="material-symbols:close"
            style={{ fontSize: "2rem" }}
          />
        </span>
      </div>
      <div className="thank-you-container-middle">
        <p className="color-text-light">
          We have received your query. We will contact you as soon as possible!
        </p>
      </div>
      <div className="thank-you-container-bottom">
        <img alt={"thank-you"} src={ThankYouImg} />
      </div>
    </div>
  );
};

export default ThankYou;
