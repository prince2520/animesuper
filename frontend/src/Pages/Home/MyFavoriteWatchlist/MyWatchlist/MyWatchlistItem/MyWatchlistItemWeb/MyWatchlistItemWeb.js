import {OverlayActions} from "../../../../../../store/overlay";
import {MyWatchlistActions} from "../../../../../../store/myWatchlist";
import {Icon} from "@iconify/react";
import React from "react";
import {useDispatch} from "react-redux";

import './MyWatchlistItemWeb.css';

const MyWatchlistItemWeb = ({res, index}) => {
    const dispatch = useDispatch();

    return (
        <div className="my-watchlist-table-item">
            <span style={{borderLeft: `${res.color}`}} className="item-no">
                {index + 1}
            </span>
            <span className="item-img">
                <img alt='main_picture'
                     width="100%"
                     src={res.fields.img_url}/></span>
            <span className="item-title">{res.fields.title}</span>
            <span className="item-progress">
                <div className="progress-bar-detail">
                    {res.fields.progress_read_watched} / {res.fields.num_episode_or_chapter ? res.fields.num_episode_or_chapter : 'N/A'}
                </div>
                <div className='progress-bar'>
                    <div className='progress-bar-completed'
                         style={{width: `${res.fields.num_episode_or_chapter ? (res.fields.progress_read_watched / res.fields.num_episode_or_chapter) * 100 : ''}%`}}/>
                </div>
            </span>
            <span className="item-type">{res.fields.type.charAt(0).toUpperCase() + res.fields.type.slice(1)}</span>
            <span className="item-delete cursor-btn"
                  onClick={() => {
                      dispatch(OverlayActions.showRemoveWatchlistHandler());
                      dispatch(MyWatchlistActions.removeWatchlistItem({
                              category: res.fields.category,
                              categoryId: res.fields.category_id
                          }
                      ))
                  }}>
                <Icon
                    icon="material-symbols:delete-outline-rounded"
                    style={{fontSize: '2rem'}}
                />
            </span>
            <span className="item-edit cursor-btn" onClick={() => {
                dispatch(OverlayActions.showEditWatchlistHandler())
                dispatch(MyWatchlistActions.selectedWatchlistItemHandler({...res.fields}))
            }}>
                <Icon
                    icon="ri:edit-line"
                    style={{fontSize: '2rem'}}
                />
            </span>
        </div>
    )
};

export default MyWatchlistItemWeb;