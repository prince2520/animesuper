import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";

import AuthContext from "../../Context/auth";

import {Link, useNavigate} from "react-router-dom";
import {OverlayActions} from "../../store/overlay";
import {Logo} from "../../photo";

import './SideBar.css';
import {sideBarData} from "./siderBarData";
const SideBar = () => {
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="bar">
            <div className="bar-top">
                <Link to='anime'><img alt={'anime-super'} src={Logo} width={'100%'}/></Link>
                <div className="options">
                    {sideBarData(authCtx.isAuth).map(data=>{
                        return (
                            (data.isAuth) && <div className="option">
                                <span className="description">{data.categoryTitle}</span>
                                {data.subCategoryData.map(subData=> <Link style={{textDecoration: 'none'}} className="title" to={subData.to}>
                                    <Icon color="white" icon={subData.icon}
                                          style={{fontSize: '2rem'}}/>
                                    <div className={'category-btn'}>{subData.name}</div>
                                </Link>)}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bar-bottom" style={{marginBottom: "1rem"}}>
                <div className="option">
                    <span className="description">General</span>
                    {authCtx.isAuth &&
                        <div className="title" style={{cursor:'pointer'}} onClick={() => dispatch(OverlayActions.showLogoutHandler())}>
                            <Icon color="white" icon="ri:logout-circle-line" style={{fontSize: '2rem'}}/>
                          <div className={'category-btn'}>Logout</div>
                        </div>}
                    {!authCtx.isAuth && <div style={{cursor:'pointer'}} className="title" onClick={() => navigate('/login')}>
                        <Icon color="white" icon="ri:login-circle-line" onClick={() => navigate('/login')} style={{fontSize: '2rem'}}/>
                        <div className={'category-btn'}>Login</div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default SideBar;