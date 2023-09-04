import {useEffect} from "react";
import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";

import SideBar from "../SideBar";

import {helperActions} from "../../../store/helper";

import './SideBarMobile.css'

const SideBarMobile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(helperActions.showMobileSideBarHandler(false));
        }
    }, [])

    return (
        <div className='sidebar-mobile-page'>
            <div className='sidebar-mobile-page-overlay'
                 onClick={() => dispatch(helperActions.showMobileSideBarHandler(false))}/>
            <div className='sidebar-mobile-page-container'>
                <SideBar/>
            </div>
            <span className="close-button">
                <Icon
                    onClick={() => dispatch(helperActions.showMobileSideBarHandler(false))}
                    color="white"
                    icon="material-symbols:close" style={{cursor: 'pointer', fontSize: '2.5rem'}}/>
            </span>
        </div>
    );
};

export default SideBarMobile;