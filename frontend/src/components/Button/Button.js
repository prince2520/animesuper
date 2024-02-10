import './Button.css';

import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

const Button = ({children, width, backgroundColor, onClick}) => {
    return (
        <ZoomInZoomOut>
            <button 
             onClick={onClick}
             style={{width:width, backgroundColor: backgroundColor}}
             className="flex-center cursor-btn custom-button">
                {children}
            </button>
        </ZoomInZoomOut>
    );
}

export default Button;