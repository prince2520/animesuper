import {useEffect} from "react";
import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";

import SideBar from "../SideBar";

import {helperActions} from "../../../redux/slice/helperSlice";

import './SideBarMobile.css'

const SideBarMobile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(helperActions.showMobileSideBarReducer(false));
        }
    }, [])

    return (
        <div className='sidebar-mobile-page'>
            <div className='sidebar-mobile-page-overlay'
                 onClick={() => dispatch(helperActions.showMobileSideBarReducer(false))}/>
            <div className='sidebar-mobile-page-container'>
                <SideBar/>
            </div>
            <span className="close-button">
                <Icon
                    onClick={() => dispatch(helperActions.showMobileSideBarReducer(false))}
                    color="white"
                    icon="material-symbols:close" style={{cursor: 'pointer', fontSize: '2.5rem'}}/>
            </span>
        </div>
    );
};

export default SideBarMobile;