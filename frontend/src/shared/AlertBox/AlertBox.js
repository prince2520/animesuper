import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";

import {getAlertIconAndColor} from "../../common";
import {AlertBoxActions} from "../../store/alertBox";

import './AlertBox.css';

const AlertBox = () => {
    const data = useSelector(state => state.alertBox.data)
    const getIconAndColor = getAlertIconAndColor(data.success);
    const dispatch = useDispatch();

    return (
        <div className="alert-box-page">
            <div className="alert-box" style={{backgroundColor: getIconAndColor.primaryColor}}>
                <div className="icon-container" style={{backgroundColor: getIconAndColor.secondaryColor}}>
                    <Icon
                        icon={getIconAndColor.icon}
                        style={{fontSize: '2rem', color: `var(--text)`}}
                    />
                </div>
                <div className="alert-box-container">
                    <div className="alert-box-status">
                        <div className="circle-1" style={{backgroundColor: getIconAndColor.secondaryColor}} />
                        <div className='circle-2' style={{backgroundColor: getIconAndColor.secondaryColor}}/>
                        <div className='circle-3' style={{backgroundColor: getIconAndColor.secondaryColor}}/>
                    </div>
                    <div className="alert-box-content" >
                        <div style={{paddingLeft:'1rem'}}>
                            <h2 style={{margin: "0"}}>{data.success ? 'Success': 'Error'}</h2>
                            <h3 style={{margin: "0"}}>{data.description}</h3>
                        </div>

                    </div>
                    <div className="alert-box-close" onClick={()=>dispatch(AlertBoxActions.closeAlertBox())}>
                        <Icon
                            className={'cursor-btn'}
                            icon="material-symbols:close-rounded"
                            style={{fontSize: '2rem', color: `white`}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertBox;