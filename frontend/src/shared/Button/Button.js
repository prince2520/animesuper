import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import './Button.css'

const Button = (props) => {
    return (
        <ZoomInZoomOut>
            <button style={{cursor:'pointer'}} className="login-button">{props.title}</button>
        </ZoomInZoomOut>
    );
}
export default Button;