import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./NotPageFound.css";

const NotPageFound = () => {
    return (
        <div className="not_page_found">
            <h1>Not Found page </h1>
            <Link to={"/home/anime"}>
                <CustomButton width={"fit-content"}>Home Page</CustomButton>
            </Link>
        </div>
    );
};

export default NotPageFound;