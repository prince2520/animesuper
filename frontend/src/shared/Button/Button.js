import './Button.css'
import ZoomInZoomOut from "../../Animation/Wrapper/ZoomInZoomOut";

const Button = (props) => {
    return (
        <ZoomInZoomOut>
            <button style={{cursor:'pointer'}} className="login-button">{props.title}</button>
        </ZoomInZoomOut>
    );
}
export default Button;