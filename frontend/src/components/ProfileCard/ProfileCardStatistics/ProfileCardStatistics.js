import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import randomColor from "randomcolor";

import {categoryType} from "../../../common";
import {getColor} from "../../../store/myWatchlist";
import {OverlayActions} from "../../../store/overlay";
import Skeleton from "react-loading-skeleton";
import Button from "../../Button/Button";

const ProfileCardStatistics = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(categoryType[0]);
    const user = useSelector(state => state.myProfile);

    const dispatch = useDispatch();

    const logoutProfileCard = (event) => {
        event.preventDefault();
        dispatch(OverlayActions.closeOverlayHandler())
        dispatch(OverlayActions.showLogoutHandler())
    }

    return (
        <form className="profile-card-statistics-form" onSubmit={(event)=>logoutProfileCard(event)}>
            <div className="profile-anime-manga-details">
                <div className="favorite-genre">
                    <h5 className="favorite-genre-title">Favorite Genre</h5>
                    <div className="favorite-genre-list">
                        {user.old_favorite_genre.length > 0 ? user.old_favorite_genre.map(res => {
                            let color = randomColor({
                                luminosity: 'light',
                                hue: 'random'
                            });
                            return <span
                                key={res.toString()}
                                className="favorite-genre-item"
                                style={{borderColor: `${color}`, color: `${color}`}}><p>{res}</p></span>
                        }) : <p>No data found</p>}

                    </div>
                </div>
                <div className="statistics">
                    <div className="statistics-bar">
                        <h5>Statistics</h5>
                        <div className="flex-center category-change-button">
                            {categoryType.map(name => <h6
                                key={name.toString()}
                                style={{cursor: 'pointer'}}
                                className={`${selectedCategory === name ? 'selected' : ''}`}
                                onClick={() => setSelectedCategory(name)}>{name}</h6>)}
                        </div>
                    </div>
                    <div className="statistics-list">
                        {((selectedCategory === categoryType[0]) ? props.categoryStats.animeStats : props.categoryStats.mangaStats).map(res =>
                            <div className="statistics-item" key={res.toString()}>
                                <div className="currently-watching">
                                    <span className="circle" style={{backgroundColor: getColor(res.status)}}/>
                                    <div className="currently-watching-detail">
                                        <p className="title">{res.status}</p>
                                        <p className="value">{res.count}</p>
                                    </div>
                                </div>
                            </div>)}
                        {(props.categoryStats.animeStats.length===0 && props.categoryStats.mangaStats.length===0) ? <Skeleton count={5}/> : null }
                    </div>
                </div>
            </div>
            <Button width={"60%"} backgroundColor={"var(--primary)"}>
              <h5 className="color-text">Logout</h5>
            </Button>
        </form>
    );
};

export default ProfileCardStatistics;