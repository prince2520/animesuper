import React, {useState} from "react";

import {useContext} from "react";

import {motion} from "framer-motion";
import {Icon} from "@iconify/react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import AuthContext from "../../Context/auth";

import {categoryType} from "../../common";
import {addToWatchlist} from "../../api/watchlist";
import {AlertBoxActions} from "../../store/alertBox";

import ZoomInZoomOut from "../../animation/Wrapper/ZoomInZoomOut";

import './Card.css';

const Card = (props) => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const {category} = useParams();
    const dispatch = useDispatch();
    const [showCardDetail, setShowCardDetail] = useState(false);



    const addToWatchlistHandler = () => {
        if (authCtx.isAuth) {
            addToWatchlist(authCtx.email, category, props.detail.id, props.detail.main_picture.medium, props.detail.title, category === categoryType[0].toLowerCase() ? props.detail.num_episodes : props.detail.num_chapters, props.detail.media_type).then(res => dispatch(AlertBoxActions.saveAlertBoxData(res))).catch(err => console.log(err))
        } else {
            dispatch(AlertBoxActions.saveAlertBoxData({
                success: false, description: 'User not Authenticated, Please login!'
            }));
        }
    };

    return (<div
            style={{height: '100%', width: '100%'}}>
            <div
                className={`card ${showCardDetail ? 'show-card-detail' : ''}`}
                style={{height: '100%', width: '100%'}}
                onMouseLeave={() => setShowCardDetail(false)}
                onMouseOver={() => setShowCardDetail(true)}>

                {props.detail.mean && <motion.span
                    className="rate">
                    <Icon icon="material-symbols:star-rounded" style={{fontSize: '1.5rem', color: 'yellow'}}/>
                    <span>{props.detail.mean}</span>
                </motion.span>}

                {!props.isRecommemdation &&
                    <div className="watchlist" style={{cursor: 'pointer'}} onClick={() => addToWatchlistHandler()}>
                        +
                    </div>}

                <div
                    className="bottom">
                    <span className="title" style={{fontSize: props.titleSize}}>{props.detail.title}</span>
                    {props.detail.genres && <span className="genres"
                                                  style={{fontSize: props.genresSize}}>{props.detail.genres.slice(0, 5).map(genre =>
                        <span>{genre.name}, </span>)}
                    </span>}
                </div>
                <ZoomInZoomOut>
                    <img style={{cursor: 'pointer'}} onClick={() => navigate(`/home/${category}/${props.detail.id}`)}
                         src={props.detail.main_picture?.medium} alt="card"/>
                </ZoomInZoomOut>
            </div>
        </div>

    );
}

export default React.memo(Card);