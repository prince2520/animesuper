import React, {useRef} from "react";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import randomColor from "randomcolor";

import {MyProfileActions} from "../../../store/myProfile";

import './ProfileCardEdit.css';

const ProfileCardEdit = (props) => {
    const user = useSelector(state => state.myProfile);
    const dispatch = useDispatch()

    const genreRef = useRef(null);
    const usernameRef = useRef(null);
    const genderRef = useRef(null);
    const locationRef = useRef(null);

    return (
        <React.Fragment>
            <div className="username-container">
                <label htmlFor="text">Username</label>
                <span className="input-box">
                    <Icon icon="gg:profile" style={{fontSize: '1.5rem'}}/>
                    <input ref={usernameRef} style={{borderLeft: "1px solid #363535", paddingLeft: "0.5rem"}}
                           defaultValue={user.username} type="email" placeholder="example_123"/>
                </span>
            </div>
            <div className="gender-location-container">
                <div className="gender-container">
                    <label htmlFor="text">Gender</label>
                    <span className="input-box">
                        <Icon icon="mdi:gender-male" style={{fontSize: '1.5rem'}}/>
                        <input ref={genderRef} defaultValue={user.gender}
                               style={{borderLeft: "1px solid #363535", paddingLeft: "0.5rem"}} type="email"
                               placeholder="Male"/>
                    </span>
                </div>

                <div className="location-container">
                    <label htmlFor="text">Location</label>
                    <span className="input-box">
                        <Icon icon="material-symbols:location-on-outline" style={{fontSize: '1.5rem'}}/>
                        <input ref={locationRef} defaultValue={user.location}
                               style={{borderLeft: "1px solid #363535", paddingLeft: "0.5rem"}} type="email"
                               placeholder="India, Delhi"/>
                    </span>
                </div>
            </div>

            <div className="favorite-genre-container">
                <label htmlFor="text">Favorite Genre</label>
                <span className="input-box">
                    <input ref={genreRef} type="email" placeholder="ex - Action"
                           style={{borderRight: "1px solid #363535", paddingRight: "0.5rem"}}/>
                    <Icon onClick={() => {
                        if (genreRef.current.value !== '') {
                            dispatch(MyProfileActions.addNewGenre(genreRef.current.value));
                        }
                    }}
                          icon="material-symbols:add-circle-outline" style={{fontSize: '1.5rem', cursor: 'pointer'}}/>
                </span>
            </div>
            <div className="favorite-genre">
                <div className="favorite-genre-list">
                    {user.new_favorite_genre.map(genre => {
                        let color = randomColor({
                            luminosity: 'light',
                            hue: 'random'
                        });
                        return <span
                            key={genre.toString()}
                            onClick={() => dispatch(MyProfileActions.deleteGenre(genre))}
                            className="favorite-genre-item"
                            style={{borderColor: `${color}`, color: `${color}`, cursor: 'pointer'}}>{genre}</span>
                    })}
                </div>
            </div>
            <div className="save-button">
                <button onClick={() =>
                    props.saveProfileDetail(
                        usernameRef.current.value,
                        genderRef.current.value,
                        locationRef.current.value,
                        user.new_favorite_genre
                    )}>Save
                </button>
            </div>
        </React.Fragment>
    );
};

export default ProfileCardEdit;