import {useContext} from "react";

import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";

import AuthContext from "../../Context/auth";

import {Link, useNavigate} from "react-router-dom";
import {OverlayActions} from "../../store/overlay";
import {Logo} from "../../photo";

import './SideBar.css';
const SideBar = () => {
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="bar">
            <div className="bar-top">
                <Link to='anime'><img alt={'anime-super'} src={Logo} width={'100%'}/></Link>
                <div className="options">
                    <div className="option">
                        <span className="description">Menu</span>
                        <Link style={{textDecoration: 'none'}} className="title" to='anime'>
                            <Icon color="white" icon="material-symbols:home-outline-rounded"
                                  style={{fontSize: '2rem'}}/>
                            <div>Home</div>
                        </Link>
                    </div>
                    <div className="option">
                        <span className="description">Category</span>
                        <Link style={{textDecoration: 'none'}} to='anime' className="title">
                            <Icon color="white" icon="bx:movie-play" style={{fontSize: "2rem"}}/>
                            <div>Anime</div>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='manga' className="title">
                            <Icon color="white" icon="material-symbols:menu-book-outline-rounded"
                                  style={{fontSize: '2rem'}}/>
                            <div>Manga</div>
                        </Link>
                    </div>
                    {authCtx.isAuth && <div className="option">
                        <span className="description">Library</span>
                        <Link style={{textDecoration: 'none'}} to='my-watchlist' className="title">
                            <Icon color="white" icon="ph:book-bookmark" style={{fontSize: '2rem'}}/>
                            <div>Watchlist</div>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to='my-favorite' className="title">
                            <Icon color="white" icon="mdi:cards-heart" style={{fontSize: '2rem'}}/>
                            <div>Favorite</div>
                        </Link>
                    </div>}
                </div>
            </div>
            <div className="bar-bottom" style={{marginBottom: "1rem"}}>
                <div className="option">
                    <span className="description">General</span>
                    {authCtx.isAuth &&
                        <div className="title" style={{cursor:'pointer'}} onClick={() => dispatch(OverlayActions.showLogoutHandler())}>
                            <Icon color="white" icon="ri:logout-circle-line" style={{fontSize: '2rem'}}/>
                            <div>Logout</div>
                        </div>}
                    {!authCtx.isAuth && <div style={{cursor:'pointer'}} className="title" onClick={() => navigate('/login')}>
                        <Icon color="white" icon="ri:login-circle-line" style={{fontSize: '2rem'}}/>
                        <div>Login</div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default SideBar;