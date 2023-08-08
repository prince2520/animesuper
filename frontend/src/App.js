import React, {useContext, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from 'react-router-dom';



import Home from "./Pages/Home/Home";
import LoginSignupPage from "./Pages/LoginSignPage/LoginSignupPage";
import LoginForm from "./Pages/LoginSignPage/Form/LoginForm";
import SignupForm from "./Pages/LoginSignPage/Form/SignupForm";
import TermAndCondition from "./Pages/Home/PolicyContactUs/TermAndCondition/TermAndCondition";
import DMCA from "./Pages/Home/PolicyContactUs/DMCA/DMCA";
import ContactUs from "./Pages/Home/PolicyContactUs/ContactUs/ContactUs";
import AnimeMangaCategory from "./Pages/Home/Anime/AnimeMangaCategory/AnimeMangaCategory";
import MyWatchlist from "./Pages/Home/MyFavoriteWatchlist/MyWatchlist/MyWatchlist";
import MyFavorite from "./Pages/Home/MyFavoriteWatchlist/MyFavorite/MyFavorite";
import AnimeMangaDetail from "./Pages/Home/Anime/AnimeMangaDetail/AnimeMangaDetail";
import AuthContext from "./Context/auth";
import AlertBox from "./shared/AlertBox/AlertBox";
import Anime from "./Pages/Home/Anime/Anime";
import ScrollToTop from "./shared/ScrollToTop";

import {AlertBoxActions} from "./store/alertBox";


import './App.css';


let time = null;

function App() {
    const authCtx = useContext(AuthContext);
    const visible = useSelector(state => state.alertBox.isVisible);
    const alertBoxData = useSelector(state => state.alertBox.data);
    const dispatch = useDispatch();

    useEffect(() => {
        clearTimeout(time);
        if (visible) {
            time = setTimeout(() => {
                dispatch(AlertBoxActions.closeAlertBox());
            }, [2000]);
        }
    }, [dispatch, visible, alertBoxData]);



    return (
        <div className="App">
            {visible && <AlertBox/>}
            <Routes>
                {!authCtx.isAuth && <Route path='/' element={<LoginSignupPage/>}>
                    <Route path='login' element={<LoginForm/>}/>
                    <Route path='signup' element={<SignupForm/>}/>
                    <Route path='' element={<Navigate to={'login'}/>}/>
                </Route>}
                <Route path='/home' element={<Home/>}>
                    <Route path=':category/category/:id' element={<AnimeMangaCategory/>}/>
                    {authCtx.isAuth &&
                        <React.Fragment>
                            <Route path='my-watchlist' element={<MyWatchlist/>}/>
                            <Route path='my-favorite' element={<MyFavorite/>}/>
                        </React.Fragment>
                    }
                    <Route path='terms-and-condition' element={<TermAndCondition/>}/>
                    <Route path='dmca' element={<DMCA/>}/>
                    <Route path='contact-us' element={<ContactUs/>}/>
                    <Route path=':category' element={<Anime/>}/>
                    <Route path=':category/:id' element={<AnimeMangaDetail/>}/>
                    <Route path='' element={<Navigate to={'anime'}/>}/>
                </Route>
            </Routes>
            <ScrollToTop/>
        </div>
    );
}

export default App;
