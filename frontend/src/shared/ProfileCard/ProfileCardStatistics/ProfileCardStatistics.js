import React, {useState} from "react";

import randomColor from "randomcolor";
import {useDispatch, useSelector} from "react-redux";

import {getColor} from "../../../store/myWatchlist";
import {categoryType} from "../../../common";
import {OverlayActions} from "../../../store/overlay";

const ProfileCardStatistics = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(categoryType[0]);


    const user = useSelector(state => state.myProfile);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div className="profile-anime-manga-details">
                <div className="favorite-genre">
                    <span className="favorite-genre-title">Favorite Genre</span>
                    <div className="favorite-genre-list">
                        {user.old_favorite_genre.length > 0 ? user.old_favorite_genre.map(res => {
                            let color = randomColor({
                                luminosity: 'light',
                                hue: 'random'
                            });
                            return <span className="favorite-genre-item"
                                         style={{borderColor: `${color}`, color: `${color}`}}>{res}</span>
                        }) : <span style={{fontSize: '1rem', color: '#636262'}}>No data found</span>}

                    </div>
                </div>
                <div className="statistics">
                    <div className="statistics-bar">
                        <span>Statistics</span>
                        <div className="category-change-button">
                            {categoryType.map(name => <span
                                style={{cursor: 'pointer'}}
                                className={`${selectedCategory === name ? 'selected' : ''}`}
                                onClick={() => setSelectedCategory(name)}>{name}</span>)}
                        </div>
                    </div>
                    <div className="statistics-list">
                        {((selectedCategory === categoryType[0]) ? props.categoryStats.animeStats : props.categoryStats.mangaStats).map(res =>
                            <div className="statistics-item">
                                <div className="currently-watching">
                                    <span className="circle" style={{backgroundColor: getColor(res.status)}}/>
                                    <div className="currently-watching-detail">
                                        <span className="title">{res.status}</span>
                                        <span className="value">{res.count}</span>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
            <div className="logout-button">
                <button
                    className={'cursor-btn'}
                    onClick={() => {
                        dispatch(OverlayActions.closeOverlayHandler())
                        dispatch(OverlayActions.showLogoutHandler())
                    }}>Logout
                </button>
            </div>
        </React.Fragment>
    );
};

export default ProfileCardStatistics;