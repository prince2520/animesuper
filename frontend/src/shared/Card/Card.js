import {useContext} from "react";

import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Icon} from "@iconify/react";

import AuthContext from "../../Context/auth";

import {addToWatchlist} from "../../api";
import {AlertBoxActions} from "../../store/alertBox";
import {categoryType} from "../../common";

import './Card.css';
import {useInView} from "react-intersection-observer";
const Card = (props) => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const {category} = useParams();
    const dispatch = useDispatch();

    const [ref, inView] = useInView();


    return (
        <div style={{height: '100%', width: '100%'}} ref={ref}>
            {inView && <div className="card" style={{height: '100%', width: '100%'}} >
                {props.detail.mean && <span className="rate">
                <Icon icon="material-symbols:star-rounded" style={{fontSize: '1.5rem', color: 'yellow'}}/>
                    <span>{props.detail.mean}</span>
                </span>}
                <div className="watchlist" style={{cursor: 'pointer'}} onClick={
                    () => {

                        if(authCtx.isAuth){
                            addToWatchlist(
                                authCtx.email,
                                category,
                                props.detail.id,
                                props.detail.main_picture.medium,
                                props.detail.title,
                                category === categoryType[0].toLowerCase() ? props.detail.num_episodes : props.detail.num_chapters,
                                props.detail.media_type
                            ).then(res => dispatch(AlertBoxActions.saveAlertBoxData(res))).catch(err => console.log(err))
                        }else {
                            dispatch(
                                AlertBoxActions.saveAlertBoxData({
                                    success: false,
                                    description: 'User not Authenticated, Please login!'
                                })
                            );
                        }

                    }}>
                    +
                </div>
                <div className="bottom">
                    <span className="title" style={{fontSize: props.titleSize}}>{props.detail.title}</span>
                    <span className="genres"
                          style={{fontSize: props.genresSize}}>{props.detail.genres.slice(0, 5).map(genre =>
                        <span>{genre.name}, </span>)}</span>
                </div>
                <img style={{cursor: 'pointer'}} onClick={() => navigate(`/home/${category}/${props.detail.id}`)}
                     src={props.detail.main_picture.medium} alt="card"/>
            </div>}

        </div>

    );
}

export default Card;